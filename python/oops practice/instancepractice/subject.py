#Create a Student class with instance variables name, grade, and subjects. Write methods to add a subject and display the student's information.

class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade
        self.subjects = []  # Initialize an empty list to store subjects

    def add_subject(self, subject):
        """Add a subject to the student's list of subjects."""
        self.subjects.append(subject)

    def display_info(self):
        """Display the student's information including name, grade, and subjects."""
        subject_list = ', '.join(self.subjects) if self.subjects else "No subjects added"
        return f"Name: {self.name}\nGrade: {self.grade}\nSubjects: {subject_list}"

# Example usage
student = Student("Alice", "10th Grade")
student.add_subject("Mathematics")
student.add_subject("Science")

print(student.display_info())

