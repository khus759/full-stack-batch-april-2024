from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import date

class UserCreate(BaseModel):
    name: str
    username: str
    email: EmailStr
    phone: str
    password: str
    dob: Optional[date] = None
    gender: Optional[str] = None
    address: Optional[str] = None
    country: Optional[str] = None

class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    id: int
    name: str
    username: str
    email: str
    phone: str
    dob: Optional[date] = None
    gender: Optional[str] = None
    address: Optional[str] = None
    country: Optional[str] = None

    class Config:
        from_attributes = True
