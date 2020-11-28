const app = Vue.createApp({
  data() {
    return {
      value: '',
    };
  },
  methods: {
    alertMessage() {
      alert('This is Alert Message !!!');
    },
    bindValue(event) {
      this.value = event.target.value;
    },
  },
});
app.mount('#exercise');
