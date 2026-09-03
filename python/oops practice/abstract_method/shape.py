#Define an abstract base class Shape with an abstract method area() and a concrete method description(). Create a subclass Circle that implements area().

from abc import ABC,abstractmethod
class Shape(ABC):
    @abstractmethod
    def area(self):
        pass
        
class Circle(Shape):
    def area(self,radius):
         pi=3.14
         print("Radius is: ",pi*radius*radius)

class Reactangle(Shape):
    def area(self,length,width):
        print("Reactangle  is ",length*width)
class square(Shape):
    def area(self,side):
        print("square is ",side*side)        
   
obj=Reactangle()
obj.area(int(int(input("enter the value of lenght : "))),int(input("enter value  of width : ")))
obj2=Circle()
obj2.area(int(input("enter the value of radius : ")))
obj3=square()
obj3.area(int(input("enter the value of square : ")))
