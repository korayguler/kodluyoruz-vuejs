const app = Vue.createApp({
  data() {
    return {
      bg: false,
      color: false,
      border: false,
      borderRad: false,
      fontBold: false,
      fontItalic: false,
    };
  },
  computed: {
    classes() {
      return {
        'bg': this.bg,
        'color': this.color,
        'border': this.border,
        'border-rad': this.borderRad,
        'font-bold': this.fontBold,
        'font-italic': this.fontItalic,
      };
    },
  },
}).mount('#app');
