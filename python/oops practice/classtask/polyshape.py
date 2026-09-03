class shape():
    def area(self):
        print("this is parent area")
        
class Circle(shape):
    def area(self,radius):
        print("Radius is: ",3.14*radius*radius)

class Square(shape):
    def area(self,square):
        print("Square is ",square*square)

    
obj=Square()
obj.area(5)