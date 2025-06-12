from fastapi import APIRouter
from pydantic import BaseModel
from database.db import create_user

router = APIRouter()

class User(BaseModel):
    name: str
    email: str
    password: str
    contact: int
    password: str
    country: str
    AccountType: str

@router.post("/signup")
async def signup(user: User):
    try:

        

        create_user(
            name=user.name,
            email=user.email,
            password=user.password,
            contact=user.contact,
            country=user.country,
            account_type=user.AccountType
        )
        return {"message": "User created successfully"}
    except Exception as e:
        return {"error": str(e)}