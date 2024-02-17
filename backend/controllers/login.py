from flask import jsonify
from flask.views import View

class Login(View):
    methods = ['GET']

    def get(self):
        return jsonify(login=True)

