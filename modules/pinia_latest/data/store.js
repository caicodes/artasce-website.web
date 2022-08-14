/**
 *
 * 🍍 pinia 🍍
 *      state management
 *
 *        @/data/store.js
 *
 */
import { defineStore } from "pinia";

export const useTodosStore = defineStore({
  id: "todos",
  state: () => ({
    todos: [
      { id: 1, title: "first todo", completed: false },
      { id: 2, title: "second todo", completed: true },
      { id: 3, title: "third todo", completed: false },
      { id: 4, title: "fourth todo", completed: true },
      { id: 5, title: "fifth todo", completed: false },
    ],
  }),
  getters: {
    completedTodos: (state) => {
      return state.todos.filter((todo) => todo.completed);
    },
  },
  actions: {
    async addTodo(title) {
      new Promise((resolve, reject) => {
        setTimeout(() => {
          this.todos.push({
            id: Math.random() * 1000,
            title,
            completed: false,
          });
          resolve();
        }, 100); // add a delay for yo spinnas beyatch
      });
    },
    deleteTodo(itemID) {
      console.log("yo delete");
      this.todos = this.todos.filter((object) => {
        return object.id !== itemID;
      });
    },
  },
});

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
    title: "yo pinia yo",
  }),
  getters: {
    oddOrEven: (state) => {
      if (state.count % 2 === 0) return "even";
      return "odd";
    },
  },
  actions: {
    incrementCount() {
      this.count++;
    },
    decrementCount() {
      this.count--;
    },
    increaseCounter(amount) {
      this.count += amount;
    },
    decreaseCounter(amount) {
      this.count -= amount;
    },
  },
});

// another usage to explore...
export const useCounterStoreApi = defineStore("counter", () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }

  return { count, increment };
});
