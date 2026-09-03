import threading
import queue
import time


task_queue = queue.Queue()


def producer():
    for i in range(10):
        print("Producing:", i)

        task_queue.put(i)

        time.sleep(0.2)

    task_queue.put(None)


def consumer():
    while True:
        task = task_queue.get()

        if task is None:
            task_queue.task_done()
            break

        print("Consuming:", task)

        time.sleep(0.5)

        task_queue.task_done()


producer_thread = threading.Thread(
    target=producer
)

consumer_thread = threading.Thread(
    target=consumer
)

producer_thread.start()
consumer_thread.start()

producer_thread.join()

task_queue.join()

consumer_thread.join()

print("All tasks completed")
