import json
name=input("Enter your name : ")
id=int(input("Enter your id number : "))
sub=""
while len(sub)==0:
    sub=("Number of subjects you have : ")


subject=int(input("enter your subject marks : "))
sub2=int(input("enter you subject marks : "))
sub3=int(input("enter your sub3 marks: "))
sub4=int(input("enter your sub4 marks : "))
sub5=int(input("enter your sub5 marks: "))
sum=subject+sub2+sub3+sub4+sub5
aveage=sum/5

result={"student name": name,"student id": id,"student 1 marks":subject,"student 2 marks":sub2,"student 3 marks":sub3,"student 4 marks":sub4,"student 5 marks":sub5,"total marks averge is":aveage}

details=json.dumps(result,indent=4)
print(details)




    
