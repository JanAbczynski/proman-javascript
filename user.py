import pass_service
import data_manager


def register_user(user_data):
    user_name = user_data['username']
    user_password = user_data['password']
    user_repeated_password = user_data['repeatedPassword']

    if pass_service.passwords_the_same(user_password, user_repeated_password):
        hashed_pass = pass_service.hash_password(user_password)
        data_manager.register_user(user_name, hashed_pass)
        print(hashed_pass)
        return True
    else:
        raise Exception('Passwords are not the same.')


def login_user(user_data):
    user_name = user_data['username']
    user_password = user_data['password']

    if user_name == "" or user_password == "":
        raise Exception('Username and password cannot be empty')

    user = data_manager.get_user_by_username(user_name)
    if user:
        if pass_service.verify_password(user_password, user['password']):
            return True
        else:
            raise Exception('Password invalid')
    else:
        raise Exception('There is no user in db')