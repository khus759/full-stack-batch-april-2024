#Implement a Dog class with instance variables for name and age. Add a method to celebrate the dog's birthday (increase the age by 1).
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def celebrate_birthday(self):
        self.age += 1
        print(f"{self.name} is now {self.age} years old!")


dog = Dog("Buddy", 5)
dog.celebrate_birthday()
dog.address="bihar"
print(dog.__dict__)
