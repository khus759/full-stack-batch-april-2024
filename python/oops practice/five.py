class Person:
    Company_name="indixpert"
    def __init__(self,nm,ag):
        self.name=nm
        self.age=ag
 
    def greet(self):
        print("welcome {self.name} your age is {self.age}")    

obj=Person("khushi",19)
obj2=Person("anand",21)
obj3=Person("nisha",19)
print(obj.name)
print(obj.name,obj.age)
print(Person.Company_name)
obj.greet()


