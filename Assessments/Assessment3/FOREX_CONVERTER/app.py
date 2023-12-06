from flask import Flask,render_template,request
import requests

app =Flask(__name__)
key ="ac6bfd91b445fdc159cc09b2e00d1f85"
url ="http://api.exchangerate.host/live?access_key=" +key

@app.route('/',methods=["POST","GET"])
def index():
    if request.method=="POST":
        firstcurrency=request.form.get("firstCurrency")
        secondcurrency=request.form.get("secondCurrency")
        amount =request.form.get("amount")

        response =requests.get(url)

        current =response.json()

        firstValue =current["quotes"][firstcurrency]
        secondValue =current["quotes"][secondcurrency]

        result =(secondValue/firstValue)*float(amount)

        currencyInfo ={"firstCurrency":firstcurrency,"secondCurrency":secondcurrency,"amount":amount,"result":result}  

          
             
        return render_template("index.html",info=currencyInfo)

    
    return render_template("index.html")

if __name__=="__main__":
    app.run(debug=True)