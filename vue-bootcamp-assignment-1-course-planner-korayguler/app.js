const app = Vue.createApp({
  data() {
    return {
      inputValue: '',
      courses: [],
      alert: false,
    };
  },
  methods: {
    addCourse() {
      if (this.inputValue) {
        this.courses.push({
          id: this.courses.length + 1,
          name: this.inputValue,
          check: false,
        });
        this.inputValue = null;
      } else {
        this.alert = true;
        setTimeout(() => (this.alert = false), 5000);
      }
    },
    clearAll() {
      this.courses = [];
    },
  },
  computed: {
    checkedCount() {
      if (this.courses === null && this.courses === []) return;
      const count = this.courses.filter((course) => course.check === false);
      return count === null ? 0 : count.length;
    },
  },
}).mount('#app');
