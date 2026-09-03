from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.connection import get_db
from app.schemas.user_schema import UserCreate, UserLogin, UserResponse
from app.services.user_service import create_user, authenticate_user

router = APIRouter(prefix="/auth", tags=["Authentication"])

@router.post("/signup", response_model=UserResponse)
def signup(user: UserCreate, db: Session = Depends(get_db)):
    new_user = create_user(db, user)
    if not new_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return new_user


@router.post("/login", response_model=UserResponse)
def login(user: UserLogin, db: Session = Depends(get_db)):
    auth_user = authenticate_user(db, user)
    if not auth_user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return auth_user
