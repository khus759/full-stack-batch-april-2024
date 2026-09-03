import json

json_str = '{"name": "John", "age": 30'  # Missing closing bracket

try:
    data = json.loads(json_str)
except json.JSONDecodeError as e:
    print(f"Decoding error: {e}")
