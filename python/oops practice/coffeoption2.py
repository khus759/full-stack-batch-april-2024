import requests
import json

response=requests.get("https://api.sampleapis.com/coffee/hot")
response=response.json()
class Coffee(object):
    def __init__(self,data):
        self.__dict__=data
    
        
def display():
    
    for v in response :
        if v ['title']=='Cappucciano':
            data=Coffee(v)
            return data
            
responseinclass=display()
print(responseinclass.title)

print(json.dumps(responseinclass.__dict__,indent=4))           
