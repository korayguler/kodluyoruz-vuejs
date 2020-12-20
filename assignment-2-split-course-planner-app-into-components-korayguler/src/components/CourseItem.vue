<template>
  <li
    style=" position: relative;"
    class="course-item list-item"
    :class="{ 'bg-success': course.status, 'bg-danger': !course.status }"
  >
    <span>{{ course.name }} </span>
    <div>
      <input type="checkbox" v-model="course.status" />
    </div>
    <span
      style="position:absolute; right:-40px;  background: tomato; padding:2px 5px; border-radius:3px; cursor:pointer;"
      @click="deleteHandler(course.id)"
    >
      sil</span
    >
  </li>
</template>

<script>
export default {
  props: ['course'],
  methods: {
    deleteHandler(id) {
      this.$emit('delete', id);
    },
  },
};
</script>
