class BankAccount:
    def _init_(self,acc=0,bal=0):
        self.acc_no=acc
        self.balance=bal

    def withdraw(self,amount):
        self.balance -=amount
        print("Rs.",amount,"was withdraw")

    def deposit(self,amount):
        self.balance +=amount
        print("Rs.",amount,"was deposited")

    def display_details(self):
        print("Account no :- ",self.acc_no)
        print("Total balance =",self.balance)

obj=BankAccount(12345)
obj.withdraw(5000)
obj.deposit(200)
obj.display_details()