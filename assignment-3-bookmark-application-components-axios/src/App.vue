<template>
  <div>
    <Header />
    <add-bookmark @saveData="saveData" />
    <bookmark-container>
      <bookmark
        v-if="bookmarkList.length > 0"
        :bookmarkList="bookmarkList"
        @deleteData="deleteData"
        @updateData="updateData"
        @closeUpdateState="closeUpdateState"
      />
      <h2 v-else>Bookmark Bulunamadı</h2>
    </bookmark-container>
  </div>
</template>

<script>
import axios from 'axios';
import Header from '@/components/Header';
import AddBookmark from './components/AddBookmark.vue';
import Bookmark from './components/Bookmark.vue';
import BookmarkContainer from './components/BookmarkContainer.vue';
export default {
  components: {
    Header,
    AddBookmark,
    Bookmark,
    BookmarkContainer,
  },
  data() {
    return {
      bookmarkList: [],
    };
  },
  methods: {
    init() {
      axios
        .get('http://localhost:3000/bookmarks')
        .then((bookmark_response) => {
          this.bookmarkList = bookmark_response.data;
        })
        .catch((e) => {
          console.log('Error', e);
        });
    },
    saveData(bookmark) {
      axios
        .post('http://localhost:3000/bookmarks', bookmark)
        .then((bookmark_save_response) => {
          // Created...
          if (bookmark_save_response.status === 201) {
            this.bookmarkList.push(bookmark_save_response.data);
          }
        });
    },
    deleteData(id) {
      axios
        .delete(`http://localhost:3000/bookmarks/${id}`)
        .then((bookmark_delete_response) => {
          this.bookmarkList = this.bookmarkList.filter((b) => b.id !== id);
        });
    },
    updateData(bookmark) {
      axios
        .patch(`http://localhost:3000/bookmarks/${bookmark.id}`, bookmark)
        .then((update_response) => {
          const matchedBookmark = this.bookmarkList.findIndex(
            (b) => b.id === bookmark.id,
          );
          if (matchedBookmark > -1) {
            this.bookmarkList[matchedBookmark] = {
              ...bookmark,
            };
          }
        });
    },
  },
  created() {
    this.init();
  },

  computed: {},
};
</script>

<style scoped>
.form-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
