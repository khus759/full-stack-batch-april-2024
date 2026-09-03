#Write an abstract class Vehicle with an abstract method drive(). 
# Implement a subclass Car that provides a concrete implementation of drive().
from abc import ABC,abstractmethod


class Vehicle(ABC):
    @abstractmethod
    def drive(self):
        pass

class Car(Vehicle):
    def drive(self):
        return "Driving a car!"

give 10 coding questions on abstract method in python oops



