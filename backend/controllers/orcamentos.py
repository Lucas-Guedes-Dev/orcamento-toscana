from flask import jsonify
from flask.views import View

class Orcamentos(View):
    methods = ['GET']

    def dispatch_request(self):
        return jsonify(message='Hello, World!')

