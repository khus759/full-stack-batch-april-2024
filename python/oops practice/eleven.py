class A:
    def add(self,a,b):
        return a+b
class B:    
    def add(self,a,b,c=0):
        return a+b+c
b=B()
print(b.add(1,2),b.add(1,2,3))   
