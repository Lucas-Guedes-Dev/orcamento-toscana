from flask import Flask, jsonify
from flask.views import View

app = Flask(__name__)

app.add_url_rule('/hello', view_func=HelloWorldView.as_view('hello'))

if __name__ == '__main__':
    app.run(debug=True)
