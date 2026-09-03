#Define a Person class with instance variables name and age. Write a method to display the person's details.
class person:
    def __init__(self):
        self.name=None
        self.age=None

    def display(self):
        self.name=input("Enter your name")
        self.age=input("Enter your age")
        print(f"my name is {self.name} and age is {self.age}")
        
obj=person()
obj.display()     
