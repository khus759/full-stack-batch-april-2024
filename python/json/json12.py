import json

data = {"name": "José", "age": 30}

# Convert dictionary to JSON string with ASCII encoding
json_str = json.dumps(data, ensure_ascii=True, indent=4)
print(json_str)
