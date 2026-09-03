class Person:
    def _init_(self, name, age):
        self.name = name
        self.age = age

    def person_info(self):
        return f"I'm {self.name} and I am {self.age} years old."


class Employee:
    def _init_(self, employee_id, department):
        self.employee_id = employee_id
        self.department = department

    def employee_info(self):
        return f"ID:- {self.employee_id}, Dept:- {self.department}"

class Manager(Person, Employee):
    def _init_(self, name, age, employee_id, department, level):
        Person._init_(self, name, age)
        Employee._init_(self, employee_id, department)
        self.level = level

    def manager_info(self):
        return f"{self.person_info()} I manager at level {self.level}. {self.employee_info()}"


manager = Manager("Anand", 20, "01", "sales", 3)

print(manager.person_info()) 
print(manager.employee_info())
print(manager.manager_info())