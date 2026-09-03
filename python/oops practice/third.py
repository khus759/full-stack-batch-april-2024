class Student:

    def display(self):
        self.id = int(input("Enter your id :- "))
        self.name = input("Enter your name :- ")
        self.address = input("Enter your address :- ")
        self.mobile_no=int(input("Enter the phone number :- "))


student_info = Student()
student_info.display()
print(student_info.__dict__)
