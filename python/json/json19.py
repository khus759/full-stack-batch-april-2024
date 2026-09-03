import json

json_str = '{"name": "John", "age": 30, "city": "New York"}'
data = json.loads(json_str)

# Filter keys
filtered_data = {k: v for k, v in data.items() if k != 'age'}
print(json.dumps(filtered_data, indent=4))
