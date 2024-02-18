from flask import jsonify
from flask.views import View

class Orcamentos(View):
    def get(self):
        return jsonify(message='Hello, World!')

