from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database.connection import engine, Base
from app.routes import auth_routes
from sqlalchemy import text

#  Create tables if not exist
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Auth API with FastAPI + MSSQL")

# Enable CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include auth routes
app.include_router(auth_routes.router)

@app.get("/")
def root():
    try:
        with engine.connect() as conn:
            conn.execute(text("SELECT 1"))
        return {"message": " Database connected successfully!"}
    except Exception as e:
        return {"error": str(e)}
