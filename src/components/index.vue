<template>
  <div class="mianWelcome">
    <router-link class="gologin" to="login">欢迎来到留言板，请点击登录</router-link>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      welcome: ""
    };
  },
  mounted() {
    if (this.$store.state.user) {
      this.$router.push({ path: "/home" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.mianWelcome {
  display: flex;
  justify-content: center;
  align-items: center;
  .gologin{
    display: block;
  }
}
</style>
