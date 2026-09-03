import time
from functools import wraps


def retry(max_attempts=3, delay=1):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):

            for attempt in range(1, max_attempts + 1):
                try:
                    return func(*args, **kwargs)

                except Exception as error:
                    print(
                        f"Attempt {attempt} failed: {error}"
                    )

                    if attempt == max_attempts:
                        raise

                    time.sleep(delay)

        return wrapper

    return decorator


count = 0


@retry(max_attempts=3, delay=0.5)
def fetch_data():
    global count

    count += 1

    if count < 3:
        raise Exception("API failed")

    return {"status": "success"}


print(fetch_data())
