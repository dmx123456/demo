<template>
  <div class="sideadd">
    <div class="lyb">留言板/ 留言</div>
    <div class="sideadd_bottom">
      <div>
        <span>标题</span>
        <el-input type="text" v-model="add_title" placeholder="标题"></el-input>
      </div>
      <div>
        <span>内容</span>
        <el-input type="textarea" v-model="add_con" placeholder="内容"></el-input>
      </div>
    </div>
    <el-button @click="add">提交</el-button>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      add_title: "",
      add_con: ""
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    add() {
      this.$store.state.lyList.push({
        user: this.$store.state.user,
        addTime: this.$store.getters.getNowFormatDate,
        content: this.add_con,
        title: this.add_title
      });
      // console.log(this.$store.state.lyList);
      this.$router.push({path:"/sidelist"})
    },
  },
  components: {}
};
</script>

<style scoped lang="scss">
.sideadd {
  display: flex;
  flex-direction: column;
  align-items: center;
  .lyb {
    width: 90%;
    height: 80px;
    line-height: 80px;
  }
  .sideadd_bottom {
    width: 90%;
  }
}
</style>
