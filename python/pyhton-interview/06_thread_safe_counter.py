import threading


class Counter:
    def __init__(self):
        self.value = 0
        self.lock = threading.Lock()

    def increment(self):
        with self.lock:
            self.value += 1


counter = Counter()


def worker():
    for _ in range(100_000):
        counter.increment()


threads = []

for _ in range(5):
    thread = threading.Thread(target=worker)
    threads.append(thread)
    thread.start()


for thread in threads:
    thread.join()


print("Final:", counter.value)
