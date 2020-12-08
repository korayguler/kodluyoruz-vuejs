const app = Vue.createApp({
  data() {
    return {
      name: 'Koray Güler',
      age: 23,
      imageUrl:
        'https://images.unsplash.com/photo-1606416463636-393d972e14df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=676&q=80',
    };
  },
  methods: {
    randomDecimal() {
      return Math.random();
    },
    changeName(event) {
      this.name = event.target.value;
    },
  },
}).mount('#exercise');
