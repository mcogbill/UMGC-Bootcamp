from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

app.config('SECRET_KEY') = "DatabaseDJ"
app.config('DEBUG_TB_INTERCEPT_REDIRECTS') = False
debug = DebugToolbarExtension(app)

@app.route('/')
def home_page():
    """Shows home page"""
    return render_template('home.html')