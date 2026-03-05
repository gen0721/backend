
import sqlite3

conn = sqlite3.connect("market.db", check_same_thread=False)
cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS users(
id INTEGER PRIMARY KEY,
username TEXT,
balance REAL DEFAULT 0,
rating REAL DEFAULT 5,
banned INTEGER DEFAULT 0
)
""")

cursor.execute("""
CREATE TABLE IF NOT EXISTS products(
id INTEGER PRIMARY KEY,
title TEXT,
price REAL,
seller INTEGER
)
""")

cursor.execute("""
CREATE TABLE IF NOT EXISTS deals(
id INTEGER PRIMARY KEY,
buyer INTEGER,
seller INTEGER,
amount REAL,
status TEXT
)
""")

cursor.execute("""
CREATE TABLE IF NOT EXISTS reviews(
id INTEGER PRIMARY KEY,
seller INTEGER,
rating INTEGER,
text TEXT
)
""")

conn.commit()
