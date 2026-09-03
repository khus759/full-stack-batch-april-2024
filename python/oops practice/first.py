class Employee:
    def __init__(self):#this (self)called non-paramerised constructur 
        self.salary=22000
        self.age=22
 

el1=Employee()
el2=Employee()
print(el1.__dict__) 


class Employee:
    def __init__(self,sel,ag):#this (self)called paramerised constructur 
        self.salary=sel
        self.age=ag
 

el1=Employee(3400,23)
el2=Employee(3200,32)
print(el1.__dict__) 

class Employee:
       pass#this is called default constructur 
        
 

el1=Employee()
el2=Employee()
print(el1.__dict__) 