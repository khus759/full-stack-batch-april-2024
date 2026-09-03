#how to access ip address
from requests import get
address=get("https://www.ipify.org/").text
print("your public address is : ",address)
