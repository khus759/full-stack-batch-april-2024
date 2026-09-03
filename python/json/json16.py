import json

def flatten_json(data):
    def flatten(x, name=''):
        if type(x) is dict:
            for k, v in x.items():
                flatten(v, name + k + '.')
        elif type(x) is list:
            for i, v in enumerate(x):
                flatten(v, name + str(i) + '.')
        else:
            items[name[:-1]] = x

    items = {}
    flatten(data)
    return items

data = {"a": {"b": {"c": 1}}}
flat = flatten_json(data)
print(flat)
