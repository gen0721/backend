import requests

CRYPTO_TOKEN="ВАШ_API_CRYPTOBOT"

def create_invoice(amount):

    url="https://pay.crypt.bot/api/createInvoice"

    headers={
        "Crypto-Pay-API-Token":CRYPTO_TOKEN
    }

    data={
        "asset":"USDT",
        "amount":amount
    }

    r=requests.post(url,json=data,headers=headers)

    return r.json()
