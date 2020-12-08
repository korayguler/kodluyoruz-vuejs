const app = Vue.createApp({
  data() {
    return { value: 0, result: null };
  },
  watch: {
    value() {
      if (this.value == 33) this.result = 'Tamamlandı';
      else this.result = 'Henüz Bitmedi';
    },
    result() {
      setTimeout(() => {
        this.value = 0;
      }, 5000);
    },
  },
});

app.mount('#exercise');
