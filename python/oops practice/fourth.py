class Student:
    id=1
    name="Anand"
    address="Mirganj"
    mobile=8002023947

    def user(self):
        self.id=int(input())
        self.name=input()
        self.address=input()
        self.mobile=int(input())
        return self
obj=Student()
data=obj.user()
print(data.id)
print(data.name)
print(data.address)
print(data.mobile)