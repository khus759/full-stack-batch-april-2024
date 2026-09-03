import requests
import json

response=requests.get("https://api.sampleapis.com/coffee/hot")
response=response.json()
class Coffee:
    def __init__(self):
        self.title=None
        self.description=None
        self.ingredients=None
        self.image=None
        self.id=None
        

def display():
    
    data=Coffee()
    data.title=input("please enter title")
    data.description=input("enter the description")
    data.ingredients=input("enter the ingredent")
    data.image=input("enter the url")
    data.id=int(input("enter id no"))
    return data.__dict__
         

