from fastapi import FastAPI

app = FastAPI()

# ✅ GET Request
@app.get("/")
def home():
    return {"message": "Welcome to FastAPI crash course 🚀"}

# ✅ GET with parameter
@app.get("/square/{num}")
def square(num: int):
    return {"number": num, "square": num * num}

# ✅ POST Request (body data lena)
@app.post("/create-user")
def create_user(user: dict):
    return {"msg": "User created successfully!", "data": user}

# ✅ PUT Request (update data)
@app.put("/update-user/{user_id}")
def update_user(user_id: int, user: dict):
    return {"msg": f"User {user_id} updated!", "new_data": user}

# ✅ DELETE Request
@app.delete("/delete-user/{user_id}")
def delete_user(user_id: int):
    return {"msg": f"User {user_id} deleted successfully!"}
