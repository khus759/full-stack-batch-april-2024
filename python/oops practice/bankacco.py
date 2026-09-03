class BankAccount:
    def __init__(self, initial_balance=0):
        self.balance = initial_balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient funds")
        else:
            self.balance -= amount

    def display_balance(self):
        print(f"Balance: ${self.balance}")

# Example usage
account = BankAccount(100)
account.deposit(50)
account.withdraw(30)
account.display_balance()  # Output: Balance: $120
