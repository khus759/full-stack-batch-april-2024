class BankAccount:
    def _init_(self, account_number,balance):
        self._account_number = account_number
        self._balance = balance

    def deposit(self, amount):
        if amount > 0:
            self._balance += amount
            print(f"Deposited:- {amount}")
        else:
            print("Deposit amount positive")

    def withdraw(self, amount):
        if 0 < amount <= self._balance:
            self._balance -= amount
            print(f"Withdrew:- {amount}")
        elif amount <= 0:
            print("Withdrawal amount positive")
        else:
            print("Insufficient balance")

    def check_balance(self):
        return f"Current total balance:- {self._balance}"

    def get_account_number(self):
        return f"Account number:- {self._account_number}"


account = BankAccount("12345",100)
account.deposit(50)
account.withdraw(30)
print(account.get_account_number(),account.check_balance())