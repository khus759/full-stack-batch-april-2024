import json

json_str = '{"data": [{"name": "John"}, {"name": "Jane"}]}'
data = json.loads(json_str)

# Accessing nested data
print(data['data'][0]['name'])
