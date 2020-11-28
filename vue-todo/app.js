const app = Vue.createApp({
  data() {
    return {
      input: '',
      todos: [],
    };
  },

  methods: {
    add() {
      if (this.input) this.todos.push(this.input);
    },
    remove(index) {
      this.todos.splice(index, 1);
    },
  },
}).mount('#app');
