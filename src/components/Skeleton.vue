<template>
  <div v-if="loading" class="vue-skeleton">
    <div v-if="avatar"
        class="vue-skeleton-header">
        <span class="vue-skeleton-avatar vue-skeleton-avatar-lg vue-skeleton-avatar-circle"></span>
    </div>
    <div class="vue-skeleton-content">
      <h3
        v-if="title"
        class="vue-skeleton-title"
        style="width: 38%;"
      ></h3>
      <ul v-if="paragraph" class="vue-skeleton-paragraph">
        <li></li>
        <li></li>
        <li style="width: 61%;"></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    avatar: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
    title: {
      type: Boolean,
      default: () => { return false; }
    },
    loading: {
      type: Boolean,
      default: () => { return false; }
    },
    paragraph: {
      type: Boolean,
      default: () => { return false; }
    }
  }
};
</script>
<style scoped>
ul,
ol,
li,
h3,
h4 {
  margin: 0;
  padding: 0;
}
.vue-skeleton {
  display: table;
  width: 100%;
}
.vue-skeleton-content {
  display: table-cell;
  vertical-align: top;
  width: 100%;
}
.vue-skeleton-content .vue-skeleton-title {
  margin-top: 16px;
  height: 16px;
  width: 100%;
  background: #f2f2f2;
}
.vue-skeleton-content .vue-skeleton-title + .vue-skeleton-paragraph {
  margin-top: 24px;
}
.vue-skeleton-content .vue-skeleton-paragraph > li {
  height: 16px;
  background: #f2f2f2;
  list-style: none;
  width: 100%;
  margin-top: 10px;
}
.vue-skeleton-header {
    display: table-cell;
    vertical-align: top;
    padding-right: 16px;
}
.vue-skeleton-header .vue-skeleton-avatar-lg.vue-skeleton-avatar-circle {
    border-radius: 50%;
}
.vue-skeleton-header .vue-skeleton-avatar-lg {
    width: 40px;
    height: 40px;
    line-height: 40px;
}
.vue-skeleton-header .vue-skeleton-avatar {
    display: inline-block;
    vertical-align: top;
    background: #f2f2f2;
    width: 32px;
    height: 32px;
    line-height: 32px;
}
</style>
