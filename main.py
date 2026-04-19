from flask import Flask, render_template, request, redirect, url_for
import requests

app = Flask(__name__)

TOKEN = "8739519145:AAEaPVvbDJKQasaSKyZV9P4EO-P7MkFfBFc"
CHAT_ID = "6658675265"
# 105283719
@app.route("/")
def home():
    return render_template("index.html")


@app.route("/send", methods=["POST"])
def send():

    name = request.form.get("name")
    phone = request.form.get("phone")
    comment = request.form.get("comment")

    text = f"""
📩 Новая заявка

👤 Имя: {name}
📞 Телефон: {phone}
💬 Комментарий: {comment}
"""

    url = f"https://api.telegram.org/bot{TOKEN}/sendMessage"

    requests.post(url, data={
        "chat_id": CHAT_ID,
        "text": text
    })

    return redirect(url_for("home"))


if __name__ == "__main__":
    app.run(debug=True)
