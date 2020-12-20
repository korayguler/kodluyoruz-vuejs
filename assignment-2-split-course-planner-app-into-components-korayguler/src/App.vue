<template>
  <div>
    <app-header text="Kurs Planlaması" />
    <container>
      <course-input @addRequested="addCourse" />
      <div v-show="courses_db.length > 0" class="card card-light mt-20">
        <h3>Aktif Kurslarım</h3>
        <ul class="list mt-20">
          <course-item
            v-for="course in courses_db"
            :course="course"
            :key="course.id"
            @delete="removeCourse"
          />
        </ul>

        <div class="mt-10">
          <small v-if="count > 0"
            >İzlenecek {{ count }} adet kursunuz var.</small
          >
          <small v-else>Tüm kursları tamamladınız :))</small>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import Container from './components/Container.vue';
import AppHeader from './components/AppHeader.vue';
import CourseInput from './components/CourseInput.vue';
import CourseItem from './components/CourseItem.vue';

export default {
  components: { AppHeader, Container, CourseInput, CourseItem },
  data() {
    return {
      courses_db: [],
    };
  },
  methods: {
    addCourse(inputVal) {
      if (!inputVal) return;
      this.courses_db.push({
        id: new Date().getTime(),
        name: inputVal,
        status: false,
      });
    },
    removeCourse(id) {
      this.courses_db = this.courses_db.filter((c) => c.id !== id);
    },
  },
  computed: {
    count() {
      return this.courses_db.filter((c) => !c.status).length;
    },
  },
};
</script>
