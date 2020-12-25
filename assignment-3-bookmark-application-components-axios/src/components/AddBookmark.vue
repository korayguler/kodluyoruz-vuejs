<template>
  <div class="container">
    <div class="form-group mr-5">
      <label>Başlık</label>
      <input v-model="bookmark.title" type="text" class="form-control" />
    </div>
    <div class="form-group mr-5">
      <label>Açıklama</label>
      <input v-model="bookmark.description" type="text" class="form-control" />
    </div>
    <div class="form-group mr-5">
      <label>URL</label>
      <input v-model="bookmark.url" type="text" class="form-control" />
    </div>
    <button @click="saveData" class="btn-primary mt-10">
      Ekle
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookmark: {
        title: null,
        description: null,
        url: null,
        updateState: false,
      },
    };
  },
  methods: {
    saveData() {
      if (
        !this.bookmark.title ||
        !this.bookmark.description ||
        !this.bookmark.url
      )
        return;
      this.$emit('saveData', this.bookmark);

      this.bookmark = {
        title: null,
        description: null,
        url: null,
      };
    },
  },
};
</script>
