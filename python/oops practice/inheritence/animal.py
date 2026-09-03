#Question: Define a base class Animal with a method speak(), and a derived class Dog that overrides speak() to print "Woof".


class Animal:
    def speak(self):
        print("woof")
class Dog(Animal):
    def speak(self):
      print("i am dog")

ob=Dog()
ob.speak()    




