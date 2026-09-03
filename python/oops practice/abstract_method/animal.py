#Create an abstract class Animal with an abstract method speak(). 
# Implement two subclasses, Dog and Cat, each overriding speak() 
# to return their respective sounds.
from abc import ABC,abstractmethod
class Animal(ABC):
    @abstractmethod
    def speak(self):
        pass
class Dog(Animal):
    def speak(self):
        print("woof")
class Cat(Animal):
    def speak(self):
        print("meoow") 

cat=Cat()
cat.speak()         
dog=Dog()
dog.speak()
             
            
