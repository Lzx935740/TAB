from flask import Flask


def create_app():
    app = Flask(__name__)
    from .views import roll_and_location
    app.register_blueprint(roll_and_location.roll_and_location_bp)
    return app
