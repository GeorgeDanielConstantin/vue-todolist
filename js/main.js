const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      todoList: [],

      newTodo: {
        text: "",
        done: false,
      },
    };
  },

  methods: {
    removeTodo(index) {
      this.todoList.splice(index, 1);
    },

    addTodo() {
      const newCopy = {
        ...this.newTodo,
      };
      this.todoList.push(newCopy);
    },
  },
});

app.mount("#app");
