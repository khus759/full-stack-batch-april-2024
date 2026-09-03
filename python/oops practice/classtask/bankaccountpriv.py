class BankAccount():
    def __init__(self):
        self.__balance=20000
        self.__account_number=122233345
        self.__owner_name="khushi"

    def deposit(self,amount):
        self.__balance+=amount
        

    def withdraw(self,amount):
        self.__balance-=amount

    #def current(self):
       # self.deposit(1000)-self.withdraw(6000)

    def display_details(self):
        print("current balance =",self.__balance)
        print("Account no :- ",self.__account_number)
        print("Account owner :- ",self.__owner_name)

obj=BankAccount()
obj.withdraw(6000)
obj.deposit(1000)
obj.display_details()

     


     

