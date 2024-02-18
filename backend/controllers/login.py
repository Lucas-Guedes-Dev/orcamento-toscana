from flask import jsonify, request
from flask.views import View

class Login(View):
    methods = ['POST']
    def dispatch_request(self):
        if request.method == "POST":
            return jsonify({'login': True}), 200
