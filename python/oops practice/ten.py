class student:
    id=int(input("enter id :- "))
    name=input("enter the name :- ")
    address=input("Enter the address :- ")
    @classmethod
    def details(cls):
        cls.id
        cls.name
        cls.address
        print(f"student id is {cls.id}\nstudent name is {cls.name}\nstudent address is {cls.address}")

student.details()


give me 10 programming question of coding in python oops of classmethod and there answer at last


class Student:
    def __init__(self, student_id, name, address):
        self.student_id = student_id
        self.name = name
        self.address = address

    def display_details(self):
        print(f"Student ID: {self.student_id}")
        print(f"Student Name: {self.name}")
        print(f"Student Address: {self.address}")
        print()

# Function to create multiple students
def create_students():
    students = []
    while True:
        student_id = int(input("Enter student ID: "))
        name = input("Enter student name: ")
        address = input("Enter student address: ")

        student = Student(student_id, name, address)
        students.append(student)

        more_students = input("Do you want to add another student? (yes/no): ").strip().lower()
        if more_students != 'yes':
            break

    return students

# Main program
def main():
    students = create_students()

    print("\nStudent Details:")
    for student in students:
        student.display_details()

if __name__ == "__main__":
    main()
