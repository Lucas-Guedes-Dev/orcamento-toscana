from flask import jsonify
from flask.views import View

class Orcamentos(View):
    methods = ['GET']

    def get(self):
        return jsonify(message='Hello, World!')

