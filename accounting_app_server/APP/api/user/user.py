from fastapi import APIRouter
from database.db import create_user_table, create_user

router = APIRouter()

@router.get("/")
def hello():
    print("Hey")
    create_user_table()
    return{"message" : "hello from /"}

@router.get("/user")
def createuser():
    create_user(1, "Aman", "aman@example.com", 25, "Male")
    create_user(2, "Sara", "sara@example.com", 28, "Female")
    return("user Created")