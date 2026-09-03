import json
d='[{"name":"khushi","language":"python"}]'
x=json.loads(d)
print(type(x))
print(x)
for a in x:
    print(a,x[a])