import database_common

# REGISTRATION
@database_common.connection_handler
def register_user(cursor, username, password):
    return cursor.execute("INSERT INTO person (username, password) VALUES (%s, %s)", (username, password))


@database_common.connection_handler
def get_user_by_username(cursor, username):
    cursor.execute("SELECT * from person WHERE username=%(username)s;""", {'username': username})
    user = cursor.fetchone()
    return user

#BOARDS


@database_common.connection_handler
def get_all_boards(cursor):
    cursor.execute("""
                    SELECT * 
                    FROM board;
                   """)
    boards = cursor.fetchall()
    return boards


#CARDS


@database_common.connection_handler
def addCard(cursor, id, title, status):
    return cursor.execute("""INSERT INTO card (board_id, title, status_id)
VALUES (%s, %s, %s);""", (id, title, status))
