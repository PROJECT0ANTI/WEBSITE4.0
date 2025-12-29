from flask import Flask, send_from_directory, render_template, request, jsonify
from flask_cors import CORS
import os
from chatbot import Chatbot


app = Flask(__name__, static_folder='../build', static_url_path='/')
CORS(app)


bot = Chatbot()


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data['message']
    bot_response = bot.get_response(user_message)
    return jsonify({'response': bot_response})

if __name__ == '__main__':
    app.run(debug=True)