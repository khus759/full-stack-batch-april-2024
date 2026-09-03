import json

# JSON string
json_str = '{"name": "John", "age": 30, "city": "New York"}'

# Convert JSON string to Python dictionary
data = json.loads(json_str)
print(data)
