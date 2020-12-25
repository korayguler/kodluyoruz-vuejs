<template>
  <div
    v-for="bookmark_item in bookmarkList"
    :key="bookmark_item.id"
    class="bookmark-item"
  >
    <div class="header">
      <h3 v-if="!bookmark_item.updateState">{{ bookmark_item.title }}</h3>
      <input
        v-else
        type="text"
        class="mt-20 mb-20 state"
        v-model="currentBookmark.title"
      />

      <button
        v-if="!bookmark_item.updateState"
        @click="deleteData(bookmark_item.id)"
        class="btn-sm btn-danger"
      >
        Kaydı Sil
      </button>
      <button
        v-else
        @click="updateData(bookmark_item)"
        class="btn-success btn-sm"
      >
        Kaydet
      </button>
    </div>
    <div>
      <p class="mt-20 mb-20" v-if="!bookmark_item.updateState">
        {{ bookmark_item.description }}
      </p>
      <input
        v-else
        type="text"
        class="mt-20 mb-20 state"
        v-model="currentBookmark.description"
      />
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <a v-if="!bookmark_item.updateState" href="#">
        {{ bookmark_item.url }}
      </a>
      <input
        v-if="bookmark_item.updateState"
        type="text"
        class="mt-20 mb-20 state"
        v-model="currentBookmark.url"
      />
      <button
        v-if="!bookmark_item.updateState"
        @click="updateItem(bookmark_item)"
        class="btn-warning btn-sm"
      >
        Düzenle
      </button>
      <button
        v-else
        @click="closeUpdateState(bookmark_item)"
        class="btn-primary btn-sm"
      >
        İptal
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['bookmarkList'],
  data() {
    return {
      currentBookmark: {
        title: null,
        url: null,
        updateState: false,
        description: null,
      },
    };
  },
  methods: {
    updateItem(bookmark_item) {
      this.bookmarkList.map((bookmark) => {
        if (bookmark.id !== bookmark_item.id) {
          bookmark.updateState = false;
        } else {
          bookmark.updateState = true;
          this.currentBookmark = {
            id: bookmark.id,
            title: bookmark.title,
            url: bookmark.url,
            description: bookmark.description,
            updateState: false,
          };
        }
      });
      //(this.currentBookmark = { ...bookmark_item });
      // this.$emit('updateItem', bookmark_item);
    },
    closeUpdateState(bookmark_item) {
      bookmark_item.updateState = false;
    },
    deleteData(id) {
      this.$emit('deleteData', id);
    },
    updateData(bookmark) {
      bookmark.updateState = false;
      this.$emit('updateData', { ...this.currentBookmark, id: bookmark.id });
    },
  },
};
</script>

<style scoped>
.state {
  margin: 5px;
}
</style>
