from flask import jsonify, request
from flask.views import View
from flask_jwt_extended import create_access_token

class Login(View):
    methods = ['POST']

    def dispatch_request(self):
        if request.method == "POST":
            username = request.json.get('username') 
            password = request.json.get('password')
            print(username, password)
            if username == 'usuario' and password == 'senha':
                access_token = create_access_token(identity=username)
                return jsonify(access_token=access_token), 200

            return jsonify({'error': 'Credenciais inválidas'}), 401