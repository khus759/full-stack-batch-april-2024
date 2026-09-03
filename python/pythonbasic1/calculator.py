print('''
      choose the task from given options:
      + for Addition
      - for Subtraction
      * for multiplication
      / for Divide
''')
num1=eval(input("please enter first number:-"))
num2=eval(input("plrase enter secondnuber:-"))
task=input("please enter the task number:-")
if task=="+":
        print(num1+num2)
elif task=="-":
        print(num1-num2)
elif task=="*":
        print(num1*num2)
elif task=="/":
        print(num1/num2)
else:
        print("invalid number")        


