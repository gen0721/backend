from aiogram import Bot,Dispatcher,types
from aiogram.utils import executor
from flask import Flask,send_from_directory
import threading

TOKEN="ВАШ_BOT_TOKEN"
DOMAIN="https://ВАШ_ДОМЕН"

bot=Bot(TOKEN)
dp=Dispatcher(bot)

app=Flask(__name__)

@app.route("/")
def index():
    return send_from_directory("webapp","index.html")

@app.route("/<path:path>")
def static_files(path):
    return send_from_directory("webapp",path)

@dp.message_handler(commands=["start"])
async def start(msg:types.Message):

    kb=types.InlineKeyboardMarkup()

    kb.add(
        types.InlineKeyboardButton(
            "🚀 Открыть маркет",
            web_app=types.WebAppInfo(url=DOMAIN)
        )
    )

    await msg.answer(
        "⚡ Neon Marketplace\n\nПокупайте безопасно через escrow",
        reply_markup=kb
    )

def run_web():
    app.run(host="0.0.0.0",port=8080)

if __name__=="__main__":

    threading.Thread(target=run_web).start()

    executor.start_polling(dp)
