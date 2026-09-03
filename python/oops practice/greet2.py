class Person:
    def __init__(self):
        self.name=input("Enter your name :- ")
        self.age=int(input("Enter your age :- "))
    def greet(self):
        print(f"Welcome Everyone I am {self.name}") 
        print(f"My Age Is {self.age}")    
p1=Person()
p2=Person()
print(p1.greet(),p2.greet())