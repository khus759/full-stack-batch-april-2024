#Question: Define a base class Person with an __init__ method and a derived class Student that initializes additional attributes.

class Person:
    def __init__(self,name):
        self.name=name

class student(Person):
    def __init__(self,name,id):
        self.id=1
        super().__init__(name)

ob=student("khushi",121)
print(ob.name) 
print(ob.id)       
