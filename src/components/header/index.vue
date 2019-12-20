<template>
  <div id="header">
    <div class="title">
      <div>
        <p>主页</p>
      </div>
      <div class="gn" @click="exit" v-if="this.$store.state.user">退出</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: ""
    };
  },
  methods: {
    exit() {
      this.$store.dispatch("EXITC");
    }
  },
};
</script>

<style lang="scss" scoped>
#header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    text-align: center;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #000;
    color: #fff;
    position: relative;
    .gn {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
</style>