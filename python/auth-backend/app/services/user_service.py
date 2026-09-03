

from sqlalchemy.orm import Session
from app.database.models import User
from app.schemas.user_schema import UserCreate, UserLogin
from app.utils.security import hash_password, verify_password

def create_user(db: Session, user: UserCreate):
    existing_user = db.query(User).filter(User.email == user.email).first()
    if existing_user:
        return None
    
    hashed_pw = hash_password(user.password)
    db_user = User(
        name=user.name,
        username=user.username,
        email=user.email,
        phone=user.phone,
        password=hashed_pw,
        dob=user.dob,
        gender=user.gender,
        address=user.address,
        country=user.country,
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def authenticate_user(db: Session, user: UserLogin):
    db_user = db.query(User).filter(User.email == user.email).first()
    if not db_user:
        return None
    
    if not verify_password(user.password, db_user.password): 
        return None

    return db_user
