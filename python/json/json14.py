import json
from decimal import Decimal

data = {"price": Decimal('19.99')}

# Custom serialization for Decimal
def encode_decimal(o):
    if isinstance(o, Decimal):
        return float(o)
    raise TypeError(f"Object of type {o.__class__.__name__} is not JSON serializable")

json_str = json.dumps(data, default=encode_decimal, indent=4)
print(json_str)


