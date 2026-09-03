import json

data = {"name": "John", "age": 30, "city": "New York"}

# Convert dictionary to JSON string with sorted keys
json_str = json.dumps(data, sort_keys=True, indent=4)
print(json_str)
