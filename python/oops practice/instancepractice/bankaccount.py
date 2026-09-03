#Design a BankAccount class with instance variables account_number and balance. Add methods to deposit and withdraw funds, and display the account details.

class BankAccount:
    def __init__(self, account_number):
        self.account_number = account_number
        self.balance = 0

    def deposit(self, amount):
        self.balance += amount
        print(f"Deposited: {amount}")

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            print(f"Withdrew: {amount}")
        else:
            print("Insufficient funds")

    def display_details(self):
        print(f"Account Number: {self.account_number}, Balance: {self.balance}")

# Example usage
account = BankAccount("123456")
account.deposit(1000)
account.withdraw(500)
account.display_details()


