import json
marks=int(input("Please Enter Your Marks :- "))
if marks>100:
    print("Please enter correct percentage")
elif marks>80:
    result={"codition":"success","percentage":marks}
elif marks>60:
    print("First division")
elif marks>45:
    print("Second division")    
else:
    print("fail")  
output=json.dumps(result,indent=4) 
print(output)

    