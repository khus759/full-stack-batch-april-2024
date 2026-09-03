class Student:
    def __init__(self, nm='', ag=0, gr=''):
        self.name = nm
        self.age = ag
        self.grade = gr

    def display(self):
        self.name = input("Enter your name :- ")
        self.age = int(input("Enter your age :- "))
        self.grade = input("Enter your grade :- ")


student_info = Student()
student_info.display()
print(student_info.__dict__)
