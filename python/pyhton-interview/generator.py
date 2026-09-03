def read_numbers(n):
    for i in range(n):
        yield i


numbers = read_numbers(1_000_000_000)

for number in numbers:
    if number == 5:
        print(number)
        break
