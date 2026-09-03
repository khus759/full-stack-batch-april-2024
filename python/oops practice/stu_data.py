class Student:
    def __init__(self,i=0,nm='', ad='',mb=0):
        self.id=i
        self.name = nm
        self.address =ad
        self.mobile_no = mb

    def display(self):
        self.id = int(input("Enter your id :- "))
        self.name = input("Enter your name :- ")
        self.address = input("Enter your address :- ")
        self.mobile_no=int(input("Enter the phone number :- "))


student_info = Student()
student_info.display()
print(student_info.__dict__)
#give 10 coding questions in python oops and answers of all question at last
