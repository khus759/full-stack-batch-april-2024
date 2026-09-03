from collections import OrderedDict


class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = OrderedDict()

    def get(self, key):
        if key not in self.cache:
            return None

        value = self.cache.pop(key)
        self.cache[key] = value

        return value

    def put(self, key, value):
        if key in self.cache:
            self.cache.pop(key)

        self.cache[key] = value

        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)


cache = LRUCache(3)

cache.put("a", 100)
cache.put("b", 200)
cache.put("c", 300)

print(cache.get("a"))  # 100

cache.put("d", 400)

print(cache.get("b"))  # None
print(cache.get("a"))  # 100
