# main.py

from fastapi import FastAPI
from app.firebase_config import db

app = FastAPI()

@app.get("/")
def home():
    return {"message": "FastAPI + Firebase"}

@app.post("/users")
def create_user():

    user = {
        "name": "Sam",
        "age": 20
    }

    db.collection("users").add(user)

    return {"status": "success"}