from flask import Flask, request, jsonify
import bcrypt  
import mysql.connector 
app = Flask(__name__)
app.config['MYSQL_DATABASE_URI'] = 'mysql://root@localhost:root@host/career'
class User:
    def __init__(self, id, username, password_hash):
        self.id = id
        self.username = username
        self.password_hash = password_hash

    @staticmethod
    def check_password(hashed_password, password):
        return bcrypt.checkpw(password.encode('utf-8'), hashed_password)
    @app.route('/login', methods=['POST'])
    def login():
        try:
            
            connection = mysql.connector.connect(**app.config['MYSQL_DATABASE_URI'])
            cursor = connection.cursor()

           
            email = request.json.get('email')
            cursor.execute(f"SELECT * FROM details WHERE Uname = '{email}'")
            user = cursor.fetchone()

            if not user:
                return jsonify({'success': False, 'message': 'Invalid email or password'}), 401

           
            hashed_password = user[2]  
            if not User.check_password(hashed_password, request.json.get('password')):
                return jsonify({'success': False, 'message': 'Invalid email or password'}), 401

            
            return jsonify({'success': True})

        except Exception as e:
            print(f'Login error: {e}')
            return jsonify({'success': False, 'message': 'An error occurred during login'}), 500
        finally:
            if connection:
                connection.close()

