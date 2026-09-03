#Create a Book class with attributes for the title, author, and year of publication. Include a method to display the book's details.

class Book:
    def __init__(self,ti="",au="",pu=0):
        self.tittle=ti
        self.auther=au
        self.publication_year=pu

    def display(self):
        self.tittle="happiness"
        self.auther="khushi"
        self.publication_year=2024

obj=Book()
obj.display()
print(f"Book Tittle : {obj.tittle}\nBook Auther : {obj.auther}\nBook Publication : {obj.publication_year}")

        

