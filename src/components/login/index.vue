<template>
  <div class="login_warpper">
    <h3>用户登录</h3>
    <div class="lw">
      <div class="loginCon">
        <span>账号：</span>
        <el-input class="user"
                  v-model="user"
                  @blur="user_jy"
                  placeholder="输入用户ID或用户名"></el-input>
      </div>
      <div class="loginCon">
        <span>密码：</span>
        <el-input class="user"
                  placeholder="请输入密码"
                  v-model="pass"></el-input>
      </div>
      <div style="display:flex; justify-content: space-between;">
        <el-button type="primary"
                   class="login"
                   @click="login">登录</el-button>
        <el-button type="primary"
                   class="login"
                   @click="reg">注册</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: "",
      pass: ""
    };
  },
  methods: {
    user_jy () {
      if (this.user == "") {
        alert("用户名不能为空");
      }
    },
    login () {
      if (this.user == "" || this.pass == "") {
        alert("账号密码不能为空");
      } else {
        this.$store.state.user = this.user;
        this.$router.push({ path: '/home', query: { id: 1 } });
      }
    },
    reg () {
      this.$store.dispatch('REG', { user: this.user, pass: this.pass })
    }
  }
};
</script>
<style lang="scss" scoped>
.login_warpper {
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    margin: 10px 0;
  }
  .lw {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    .loginCon {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 20px;
      .user {
        width: 100%;
      }
      span {
        // display: block;
        width: 100px;
      }
    }
  }
  // .login {
  //   // margin-top: 20px;
  // }
}
</style>