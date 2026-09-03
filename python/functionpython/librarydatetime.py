import datetime
#for output as yy/mm/dd and time 
x=datetime.datetime.now()
print(x)
#for output as yy/mm/dd
print(datetime.datetime(2024,7,24))
#
x=datetime.datetime.now()
m=x.strftime("%Y")
print(x)
print(m)
#
print(datetime.datetime(2024,7,24))






