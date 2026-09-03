import requests
import json

response=requests.get("https://api.sampleapis.com/coffee/hot")
response=response.json()
class Coffee:
    def __init__(self,data):
        self.__dict__=data
        self.title=data['title']
        self.description=data['description']
        self.ingredients=data['ingredients']
        self.image=data['image']
        self.id=data['id']
        

def display():
    
    for v in response :
        if v ['title']==['Cappucciano']:
            data=Coffee(v)
            return data

responseinclass=display()
print(responseinclass.ingredients)

print(json.dumps(responseinclass.__dict__,indent=4))           

