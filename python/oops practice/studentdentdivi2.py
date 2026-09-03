import json

marks = int(input("Please Enter Your Marks :- "))

if marks > 100:
    result = { "message": "Please enter the correct percentage"}
elif marks > 80:
    result = {"Percentage": marks, "Division": "Merit first division"}
elif marks > 60:
    result = {"Percentage": marks, "Division": "First division"}
elif marks > 45:
    result = {"Percentage": marks, "Division": "Second division"}
else:
    result = {"Percentage": marks, "Division": "fail"}

output = json.dumps(result, indent=4)
print(output)

