<template>
  <div class="nav">
    <el-radio-group v-model="isCollapse"
                    style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开1213910</el-radio-button>
      <el-radio-button :label="true">收起123456</el-radio-button>
    </el-radio-group>
    <el-menu :default-active="this.$route.path"
             router
             class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose"
             :collapse="isCollapse">
      <div v-for="(item,i) in navList"
           :key="i">
        <el-submenu v-if="item.list"
                    :key="i"
                    :index="item.name">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title"
                  v-if="!isCollapse">{{item.title}}</span>
          </template>
          <el-menu-item-group>
            <span slot="title">{{item.title}}</span>
            <el-menu-item v-for="(list,j) in item.list"
                          :key="j"
                          :index="list.name">{{list.navTime}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item :index="item.name"
                      v-else>
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
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
          name: "/sidelist",
          icon: "el-icon-edit-outline",
          list: [
            { name: "/sidelist", navTime: "列表" },
            { name: "/sideadd", navTime: "留言" }
          ]
        }
      ]
    };
  },
  computed: {},
  created () { },
  mounted () { },
  watch: {},
  methods: {
    handleOpen () { },
    handleClose () { }
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
