<template>
  <div class="card">
    <div class="user--action--container">
      <div class="form-group">
        <label>Kursun Adı</label>
        <input type="text" v-model="input" @keypress.enter="handler" />
      </div>
      <button class="btn-primary" @click="handler">Kurs Ekle</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseInput',
  data() {
    return {
      input: '',
    };
  },
  methods: {
    handler() {
      this.$emit('addRequested', this.input);
      this.input = '';
    },
  },
};
</script>
