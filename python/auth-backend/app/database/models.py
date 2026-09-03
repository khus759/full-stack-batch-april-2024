from sqlalchemy import Column, Integer, String, Date
from app.database.connection import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    username = Column(String(100), unique=True)
    email = Column(String(100), unique=True, index=True)
    phone = Column(String(20))
    password = Column(String(255))
    dob = Column(Date, nullable=True)
    gender = Column(String(20), nullable=True)
    address = Column(String(255), nullable=True)
    country = Column(String(100), nullable=True)
