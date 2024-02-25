from flask_jwt_extended import jwt_required, get_jwt_identity
from flask.views import View
class Orcamentos(View):
    methods = ['GET']

    @jwt_required()
    def dispatch_request(self):
        current_user = get_jwt_identity()
        return jsonify({'mensagem': f'Olá, {current_user}! Este é um recurso protegido.'})
