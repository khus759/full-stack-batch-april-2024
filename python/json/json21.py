import json

data = {("key1", "key2"): "value"}

# Custom serialization for complex keys
def encode_key(o):
    if isinstance(o
