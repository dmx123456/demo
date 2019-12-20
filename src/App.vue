<template>
  <div id="app">
    <Header></Header>
    <div class="indexC">
      <Nav></Nav>
      <router-view class="content" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";
import Nav from "@/components/nav";
import { mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {
      user: ""
    };
  },
  methods: {
    exit() {
      this.$store.dispatch("EXITC");
    },
    saveState() {
      sessionStorage.setItem("state", JSON.stringify(this.$store.state));
    }
  },
  mounted() {
    window.addEventListener("unload", this.saveState);
    this.user = this.$store.state.user;
  },
  components: {
    Header,
    Nav
  }
};
</script>
<style lang="scss" scoped>
#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  .indexC {
    width: 99%;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 10px;
    .content {
      flex: 1;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
}
</style>