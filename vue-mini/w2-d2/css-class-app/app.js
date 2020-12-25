const app = Vue.createApp({
  data() {
    return {
      color_palette: [
        {
          id: 'red',
          css_class: 'red-box',
        },
        {
          id: 'green',
          css_class: 'green-box',
        },
        {
          id: 'blue',
          css_class: 'blue-box',
        },
      ],
      customClass: null,
    };
  },
  methods: {
    changeClass(customClass) {
      this.customClass = customClass;
    },
  },
}).mount('#app');
