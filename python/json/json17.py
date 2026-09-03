import json

json_str = '{"a": {"b": {"c": 1}}}'
data = json.loads(json_str)

# Extract value using path
def get_value(data, path):
    keys = path.split('.')
    for key in keys:
        data = data.get(key, {})
    return data

print(get_value(data, 'a.b.c'))
