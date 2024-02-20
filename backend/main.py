from flask import Flask
from flask_cors import CORS
from controllers.orcamentos import Orcamentos
from controllers.login import Login
app = Flask(__name__)
CORS(app)

app.add_url_rule('/', view_func=Orcamentos.as_view('orcamentos'))
app.add_url_rule('/login', view_func=Login.as_view('login'))

if __name__ == '__main__':
    app.run(debug=True, host='192.168.0.24',  port=9000)
