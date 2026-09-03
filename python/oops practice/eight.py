import requests
import json
class Coffee:
    def __init__(self,co=""):
        self.hot_coffee=co
        

    def Url(self): 
        self.hot_coffee=requests.get("https://api.sampleapis.com/coffee/hot")
        self.hot_coffee=self.hot_coffee.json()
        for x in self.hot_coffee:
            if x["title"]=="cappuccino":
                print(x)

obj=Coffee()
obj.Url()



    