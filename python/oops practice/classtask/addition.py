class Account():
    def __init__(self,Name,bal):
        self.account_holder=Name
        self.balance=bal

    def __add__(self,other):
        bank=self.balance+other.balance
        return Account("all books",bank)
    
    def __str__(self):
        return str(self.balance)
     
    def __eq__(self,other) :
        return self.account_holder==self.account_holder,other.balance==other.balance


bank1=Account("khushi",10000)
bank2= Account("khushi",20000)
bank3= Account("khushi",30000)

print(f"Total balance : ",bank1+bank2+bank3)        
print(bank1==bank2)
