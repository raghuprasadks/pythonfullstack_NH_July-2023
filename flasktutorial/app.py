from flask import Flask
print("__name__ ",__name__)
app = Flask(__name__)

@app.route("/")
def welcome():
    return "Welcome to Flask"
@app.route("/greet")
def greet():
    return "Greetings from Flask "

if(__name__=="__main__"):
    app.run(debug=True)

