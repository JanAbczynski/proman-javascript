from flask import Flask, render_template, url_for, redirect, request, session
from util import json_response

import data_handler, user, data_manager
import json
from ast import literal_eval


app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'


@app.route("/")
def index():
    """
    This is a one-pager which shows all the boards and cards
    """
    return render_template('index.html')


@app.route("/get-boards")
@json_response
def get_boards():
    """
    All the boards
    """
    return data_handler.get_boards()


@app.route("/get-cards/<int:board_id>")
@json_response
def get_cards_for_board(board_id: int):
    """
    All cards that belongs to a board
    :param board_id: id of the parent board
    """
    return data_handler.get_cards_for_board(board_id)


@app.route("/board/add")
@json_response
def save_board(board_id: int):

    return data_handler.get_cards_for_board(board_id)





def main():
    app.run(debug=True)

    # Serving the favicon
    with app.app_context():
        app.add_url_rule('/favicon.ico', redirect_to=url_for('static', filename='favicon/favicon.ico'))


@app.route('/registration', methods=['GET'])
def show_register_template():
    return render_template('registration.html')


@app.route('/registration', methods=['POST'])
def register_user():
    try:
        user.register_user(request.form)
        return redirect('/')
    except Exception as e:
        return redirect('/registration?info_message='+str(e))


@app.route('/login')
def show_login_template():
    return render_template('login.html')


@app.route('/login', methods=['POST'])
def login_user():
    try:
        user.login_user(request.form)
        session['username'] = request.form['username']
        return redirect('/')
    except Exception as e:
        return redirect('/login?info_message='+str(e))


@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect('/')


@app.route('/save/<type>', methods=['GET'])
def save(type):
    # print(type)
    data_handler.save_csv(type)
    return redirect('/')

@app.route('/savedata', methods=['POST'])
def savedata():
    jsdata = request.data
    datas = json.loads(jsdata.decode('utf8'))
    newData = datas["statuses"][1]
    print('xxxx', newData)
    s = json.dumps(newData)
    return s


@app.route('/savedata', methods=['GET'])
def savedataget():
    jsdata = request.json()
    # data = request.json()
    print('xxxx', jsdata)
    # data_handler.save_csv(type)
    return jsdata


@app.route('/save2', methods=['POST'])
def save2():
    print(request)
    jsdata = request.data
    datas = json.loads(jsdata.decode('utf8'))
    newData = datas["statuses"][1]
    print('xxxx', newData)
    s = json.dumps(newData)
    return s

@app.route('/addCard', methods=['POST'])
def addCard():
    dataCaptured = request.data
    dataCaptured = json.loads(dataCaptured.decode('utf8'))
    id = dataCaptured['id']
    title = dataCaptured['title']
    status = dataCaptured['status']
    data_manager.addCard(id, title, status)
    print(id, title, status)






if __name__ == '__main__':
    main()


