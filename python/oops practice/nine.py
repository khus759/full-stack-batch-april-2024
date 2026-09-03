class Student:
    @classmethod
    def value(cls,id=0,Name="",Address=""):
       cls=Student()
       cls.id=input("Enter your id")
       cls.Name=input("Enter your Name")
       cls.Address=input("Enter your address")
       return cls
        

    @classmethod
    def data(cls):
        print(f"Student id is :",cls.id)
        print(f"student name is : ",cls.Name)
        print(f"student name is : ",cls.Address)

obj=Student()
obj.value()
obj.data()




#class Student:
#    studentid=1
#    studentName="Amit"
#    studentAddress="Bihar"
#
#    @classmethod
#    def Getdata(cls):
#        cls=Student()
#        cls.studentid
#        cls.studentName
#        cls.studentAddress
#    @classmethod
#    def Displaydata(cls):
#        print(cls.studentid)
#        print(cls.studentName)
#        print(cls.studentAddress)
#Student.Getdata()
#Student.Displaydata()