import json

json1 = '{"name": "John", "age": 30}'
json2 = '{"city": "New York", "country": "USA"}'

data1 = json.loads(json1)
data2 = json.loads(json2)

# Merge dictionaries
merged_data = {**data1, **data2}
print(json.dumps(merged_data, indent=4))
