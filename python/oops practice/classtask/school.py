class Student:
    def __init__(self):
        self.name="khushi"
        self.address="mirganj"
    def mob(self,mob=0):
        self.__mobile=mob

    def display (self,__mobile):
        print("Name : ",self.name)
        print("Address : ",self.address)
        print("Mobile no :",self.__mobile) 

obj=Student()
obj.mob(2345677889)
obj.display()
print(obj.__dict__)