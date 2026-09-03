import time
from datetime import datetime


time = time.time()

current_datetime = datetime.fromtimestamp(time)
time = current_datetime.strftime("%H:%M:%S")

print("Current time :", time)
