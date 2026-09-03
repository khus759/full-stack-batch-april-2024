import json

data = {"name": "John", "age": 30, "city": "New York"}

# Convert dictionary to JSON string with indentation
json_str = json.dumps(data, indent=4)
print(json_str)
