from flask import Flask

app = Flask(__name__, static_folder="backend")

@app.route("/")
def index():
    return " <div><h1>Test<h1/><div/>"


if __name__ == "__main__":
    app.run(debug=True)

