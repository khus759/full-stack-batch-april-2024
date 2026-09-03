class Vehicle:
    def __init__(self,make="",model="",year=0):
     self.make=make
     self.model=model
     self.year=year
    def display(self):
       print(f"Made by : {self.make}\nModel Name : {self.model}\nIn Year : {self.year}")  

class Car(Vehicle):
   
   number_of_door="Four"
   def display_car(self):
      self.make="Mahindra"
      self.model="Suv700"
      self.year=2020
      print(f"Number of doors : {self.number_of_door}")

class  Motrcycle(Vehicle):
   
   has_sidecar="no"
   def  display_motarcycle(self):
      self.make="Apache"
      self.model="s001"
      self.year=2020
      print(f"{self.has_sidecar}: Two Wheeler bike\nmake={self.make}\nmodel={self.model}\nIn year={self.year}")
                   
el=Motrcycle()        
el.display_motarcycle()



           





