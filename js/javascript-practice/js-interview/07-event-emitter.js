class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(event, listener) {
    if (!this.events.has(event)) {
      this.events.set(event, new Set());
    }

    this.events.get(event).add(listener);

    return () => {
      this.off(event, listener);
    };
  }

  off(event, listener) {
    const listeners = this.events.get(event);

    if (!listeners) return;

    listeners.delete(listener);

    if (listeners.size === 0) {
      this.events.delete(event);
    }
  }

  once(event, listener) {
    const wrapper = (...args) => {
      this.off(event, wrapper);
      listener(...args);
    };

    this.on(event, wrapper);
  }

  emit(event, ...args) {
    const listeners = this.events.get(event);

    if (!listeners) return;

    for (const listener of [...listeners]) {
      listener(...args);
    }
  }
}

// Example
const emitter = new EventEmitter();

const unsubscribe = emitter.on("login", (user) => {
  console.log("User logged in:", user);
});

emitter.once("logout", () => {
  console.log("User logged out");
});

emitter.emit("login", {
  id: 1,
  name: "Rahul"
});

emitter.emit("logout");
emitter.emit("logout");

unsubscribe();
