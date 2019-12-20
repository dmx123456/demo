<template>
  <div id="welcome">
    <h3>欢迎</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      isCollapse: true
    };
  },
  methods: {},
  mounted() {
    console.log(this.$route.querys);
  }
};
</script>
<style lang="scss" scoped>
#app {
  width: 100%;
  display: flex;
}
</style>
