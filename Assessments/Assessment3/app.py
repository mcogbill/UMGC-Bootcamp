from flask import Flask, render_template
import requests
import json

app = Flask(__name__)


def index():
    return "Currency Converter"


var1 = input("Converting From: ")
var2 = input("Converting To: ")
var3 = input("Amount: ")


print("Converting From: ", var1, "Converting To: ", var2, "Amount: ", var3)

var1, var2, var3 = input("num1 num2 num3 :").split()


print("Converting From: ", var1, "Converting To: ", var2, "Amount: ", var3)
