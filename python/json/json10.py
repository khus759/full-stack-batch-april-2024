import json

def safe_serialize(obj):
    try:
        return json.dumps(obj, indent=4)
    except TypeError as e:
        print(f"Serialization error: {e}")

data = set([1, 2, 3])  # Sets are not serializable by default
print(safe_serialize(data))
