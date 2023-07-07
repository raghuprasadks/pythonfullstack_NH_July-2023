#from flask import Flask
from flask import Flask, request, jsonify
print("__name__ ",__name__)
app = Flask(__name__)
#http://127.0.0.1:5000/
@app.route("/")
def welcome():
    return "Welcome to Flask"
#http://127.0.0.1:5000/greet
@app.route("/greet")
def greet():
    return "Greetings from Flask "

#http://127.0.0.1:5000/greetinperson/raghu
@app.route("/greetinperson/<string:name>")
def personalizedgreeting(name):
    return f" {name} Greetings from Flask "

#http://127.0.0.1:5000/add/10/20
@app.route("/add/<int:num1>/<int:num2>")
def add(num1,num2):
    return str(num1+num2)

@app.route("/users/add",methods=["post"])
def addUser():
    user = request.get_json()
    print("post method")
    return user

if(__name__=="__main__"):
    app.run(debug=True)

