import json

data = {
    "name": "John",
    "age": 30,
    "address": {
        "street": "123 Main St",
        "city": "New York"
    }
}

# Convert dictionary to JSON string
json_str = json.dumps(data, indent=4)
print(json_str)

