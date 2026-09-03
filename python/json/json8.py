import json

data = {
    "name": "John",
    "age": 30,
    "married": True,
    "children": None,
    "height": 5.9
}

# Convert dictionary to JSON string
json_str = json.dumps(data, indent=4)
print(json_str)
