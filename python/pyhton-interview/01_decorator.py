from functools import wraps
import time


def log_execution(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()

        result = func(*args, **kwargs)

        end = time.time()

        print(f"{func.__name__} took {end - start:.4f}s")

        return result

    return wrapper


@log_execution
def calculate_sum(n):
    return sum(range(n + 1))


print(calculate_sum(1_000_000))
