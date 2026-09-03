import json

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def to_dict(self):
        return {"name": self.name, "age": self.age}

# Custom serialization
def serialize_person(person):
    return json.dumps(person.to_dict(), indent=4)

p = Person("John", 30)
print(serialize_person(p))
