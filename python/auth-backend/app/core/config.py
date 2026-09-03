import os
from dotenv import load_dotenv

# Load .env file from root directory
load_dotenv()

# Safe import for both Python 3.12 & 3.13
try:
    from pydantic_settings import BaseSettings
except ModuleNotFoundError:
    from pydantic import BaseModel as BaseSettings


class Settings(BaseSettings):
    # Use the complete DATABASE_URL directly from .env
    DATABASE_URL: str = os.getenv("DATABASE_URL")


    class Config:
        extra = "ignore"  # ✅ ignore new or extra .env variables automatically
        env_file = ".env"
        env_file_encoding = "utf-8"


#  Create a single settings instance
settings = Settings()

#  Debug check
print("Loaded DATABASE_URL => ", settings.DATABASE_URL)
