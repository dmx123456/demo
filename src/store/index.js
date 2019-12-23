import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
    //id
    user: '',
    nav: '',
    lyList: [{
      title: "首页",
      addTime: "2019-01-11",
      content: "12345670",
      user: "dmx"
    }],
    regList: [{
      "user": 'dmx',
      "pass": '123'
    }],
    //技能状态
  },
  getters: {
    getNowFormatDate () {
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + seperator1 + month + seperator1 + strDate;
      return currentdate;
    }
  },
  mutations: {
    EXIT (state) {
      state.user = '';
      router.push({
        path: "/login"
      });
    },
    REG (state, data) {
      var reg = state.regList;
      reg.map(item => {
        // if(data.user == item.user){
        //   alert("")
        // }
      })
      reg.push(data)
      console.log(state.regList);

    }
  },
  actions: {
    EXITC ({
      commit
    }) {
      commit("EXIT")
    },
    REG ({ commit }, sj) {
      commit("REG", sj)
    }
  }
})
