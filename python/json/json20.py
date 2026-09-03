import json

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def to_dict(self):
        return {"name": self.name, "age": self.age}

    @staticmethod
    def from_dict(data):
        return Person(data['name'], data['age'])

person = Person("John", 30)
person_json = json.dumps(person.to_dict(), indent=4)
print(person_json)

# Deserialize
person_data = json.loads(person_json)
new_person = Person.from_dict(person_data)
print(new_person.name, new_person.age)
