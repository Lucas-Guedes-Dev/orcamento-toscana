from flask import Flask
from flask_cors import CORS
from controllers.orcamentos import Orcamentos
from controllers.login import Login
from flask_jwt_extended import JWTManager

app = Flask(__name__)
CORS(app)

app.config['JWT_SECRET_KEY'] = 'chavinha_secreta' 
jwt = JWTManager(app)

app.add_url_rule('/', view_func=Orcamentos.as_view('orcamentos'))
app.add_url_rule('/login', view_func=Login.as_view('login'))

if __name__ == '__main__':
    app.run(debug=True, host='192.168.0.211',  port=9000)
