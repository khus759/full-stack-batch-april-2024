import json

data = {"name": "John", "age": 30, "city": "New York","profession":"engineer"}

# Write JSON data to a file
with open('data.json', 'a') as file:
    json.dump(data, file, indent=4)
