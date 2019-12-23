<template>
  <div class="nav">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          :default-active="this.$route.path"
          router
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <div v-for="(item,i) in navList" :key="i">
            <el-submenu :index="item.name" v-if="item.list">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.title}}</span>
              </template>
              <div v-for="(sec,i) in item.list" :key="i">
                <el-submenu :index="sec.name" v-if="sec.list">
                  <template slot="title">{{sec.title}}</template>
                  <el-menu-item
                    :index="three.name"
                    v-for="(three,i) in sec.list"
                    :key="i"
                  >{{three.title}}</el-menu-item>
                </el-submenu>
                <el-menu-item v-else :index="sec.name">{{sec.title}}</el-menu-item>
              </div>
            </el-submenu>
            <el-menu-item v-else :index="item.name">
              <i :class="item.icon"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
          </div>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      isCollapse: true,
      navList: [
        {
          title: "首页",
          name: "/home",
          icon: "el-icon-menu"
        },
        {
          title: "留言板",
          name: "",
          icon: "el-icon-edit-outline",
          list: [
            {
              name: "/sidelist",
              title: "列表",
              list: [
                { name: "/sidelist", title: "列表" },
                { name: "/", title: "2" }
              ]
            },
            { name: "/sideadd", title: "留言" }
          ]
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.nav {
  width: 200px;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}
</style>
