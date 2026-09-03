from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

users = []


class User(BaseModel):
    name: str
    email: str
    age: int


@router.post("/users")
async def create_user(user: User):
    new_user = {
        "id": len(users) + 1,
        **user.model_dump()
    }

    users.append(new_user)

    return new_user


@router.get("/users")
async def get_users():
    return users


@router.get("/users/{user_id}")
async def get_user(user_id: int):

    for user in users:
        if user["id"] == user_id:
            return user

    raise HTTPException(
        status_code=404,
        detail="User not found"
    )


@router.delete("/users/{user_id}")
async def delete_user(user_id: int):

    for user in users:
        if user["id"] == user_id:
            users.remove(user)

            return {
                "message": "User deleted"
            }

    raise HTTPException(
        status_code=404,
        detail="User not found"
    )
