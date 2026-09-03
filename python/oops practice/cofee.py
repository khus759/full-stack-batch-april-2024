import requests
import json
response=requests.get("https://api.sampleapis.com/coffee/hot")
response=response.json()

class Coffee:
    def _init_(self,data):
        self._dict_=data

def GetCoffeeData():
    for n in response:
        if n["title"]=="Cappuccino":
            data=Coffee(n)
            return data
            
responseinclass=GetCoffeeData()
print(responseinclass.title)
print(json.dumps(responseinclass._dict_,indent=2))