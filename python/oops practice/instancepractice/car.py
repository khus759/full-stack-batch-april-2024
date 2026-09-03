#Create a Car class with instance variables make, model, and year. Add a method to display the car's information.

class Car:
    def __init__(self,make="",model="",year=0):
        self.make=make
        self.model=model
        self.year=year
    def display(self):
        print(f"car make in {self.make} and the model is {self.model} come in {self.year}")
       

obj=Car("mahindra","s24",2024)
obj.display()
     

