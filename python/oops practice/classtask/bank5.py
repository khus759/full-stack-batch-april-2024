#Question: Implement a class BankAccount with private attributes _balance and _account_number. Provide public methods to deposit, withdraw, and
#  check the balance. Show how encapsulation is used to protect the internal state of the account.

class BankAccount:
    def __init__(self):
        print("-----BANK DETAILS-----")
        self.name=input("please enter your name : ")
        self.__balance=2000
        self.__account_number=int(input("please enter your account no : "))
        
    def withdraw(self,amount=0):
        self.__balance-=amount
        if amount>self.__balance:
            print("insuffecient balance")
            

    def deposit(self,amount=0):    
        self.__balance+=amount

    def display(self):  
        print("---BANK DETAILS INFO---")
        print("Account Holder :",self.name)  
        print("Current Balance :",self.__balance)  
        print("Account Number  :",self.__account_number) 
        
bank=BankAccount()
bank.withdraw(int(input("Enter the withdraw amount : ")))
bank.deposit(int(input("Enter the deposit amount : ")))
bank.display()




         
