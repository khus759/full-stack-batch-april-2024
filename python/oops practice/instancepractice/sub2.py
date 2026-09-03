class Student:
    def _init_(self, name, grade):
        self.name = name
        self.grade = grade
        self.subjects = []

    def add_subject(self, subject):
            self.subjects.append(subject)

    def display_details(self):
        print(f"\nStudent Name: {self.name}")
        print(f"Grade: {self.grade}")
        print("Subject:- ")
        for subject in self.subjects:
            print(f"     - {subject}",end="")

data = Student("Anand", "A")
data.add_subject("Mathematics")
data.add_subject("Science")
data.add_subject("English")
data.display_details()