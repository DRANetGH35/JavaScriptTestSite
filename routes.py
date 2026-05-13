from flask import render_template

from extensions import db
from models import User
from app import create_app

app = create_app()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/to_do_list')
def to_do_list():
    return render_template('to_do_list.html')
