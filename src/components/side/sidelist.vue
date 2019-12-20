<template>
  <div class="sideList">
    <div class="lyb">留言板/ 列表</div>
    <div class="side_gn">
      <el-button @click="add">新增留言</el-button>
      <div>
        <el-input
          @keyup.native="getSideList(ss_val)"
          type="text"
          v-model="ss_val"
          placeholder="输入关键字搜索"
        ></el-input>
        <el-button @click="getSideList(ss_val)">搜索</el-button>
      </div>
    </div>
    <div class="side_list_content">
      <div class="side_list_content_warpper" v-for="(item,i) in res" :key="i">
        <div class="sidelist_one">
          <div>
            <span>标题：{{item.title}}</span>
            <span>发送人：{{item.user}}</span>
          </div>
          <div>{{item.addTime}}</div>
        </div>
        <div class="cz">
          <div class="sidelist_text">{{item.content}}</div>
          <div v-if="$store.state.user == item.user">
            <i @click="lydel(i)" class="el-icon-delete"></i>
            <i class="el-icon-edit" @click="handelEdit(i)"></i>
          </div>
        </div>
      </div>
    </div>
    <el-dialog title="修改留言" :visible.sync="dialogFormVisible">
      <el-form>
        <el-form-item label="标题">
          <el-input v-model="edit_title" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="edit_con" type="textarea" rows="6" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit(edit_id)">确 定</el-button>
      </div>
    </el-dialog>
    <el-pagination
      background
      style="margin-top:20px;"
      layout="prev, pager, next"
      :total="res.length"
    ></el-pagination>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {},
  data() {
    return {
      dialogFormVisible: false,
      dialogStatus: "",
      res: "",
      ss_val: "",
      edit_title: "",
      edit_con: "",
      edit_id:''
      // page_size: "1"
    };
  },
  mounted() {
    this.getSideList();
  },
  methods: {
    handelEdit(id) {
      //显示弹框
      this.dialogFormVisible = true;
      //编辑弹框标题
      this.dialogStatus = "editEquipent";
      this.edit_title = this.res[id].title;
      this.edit_con = this.res[id].content;
      this.edit_id = id
    },
    edit(id) {
      // console.log(this.res[id]);
      this.dialogFormVisible = false
      this.$store.state.lyList[id].title = this.edit_title;
      this.$store.state.lyList[id].content = this.edit_con;
    },
    lydel(id) {
      // console.log(id);
      this.$store.state.lyList.splice(id, 1);
    },
    ss() {
      this.getSideList(this.ss_val);
    },
    add() {
      this.$router.push({
        path: "/sideadd"
      });
    },
    getSideList(n) {
      var arr = [];
      this.res = "";
      if (!n) {
        this.res = this.$store.state.lyList;
      } else {
        this.$store.state.lyList.map(item => {
          console.log(item);

          if (item.user.indexOf(n) > -1 || item.content.indexOf(n) > -1 || item.title.indexOf(n) > -1) {
            arr.push(item);
          }
          this.res = arr;
        });
      }
      this.res = this.$store.state.lyList;
      axios.get("http://localhost:8081/static/ly.json").then(res => {
        var arr = [];
        this.res = ''
        if (!n) {
          this.res = res.data.lylist;
        } else {
          res.data.lylist.map(item => {
            if (item.user == n) {
              arr.push(item);
            }
            this.res = arr
          });
        }
      });
      console.log(this.res);
    }
  }
};
</script>

<style scoped lang="scss">
.sideList {
  display: flex;
  flex-direction: column;
  align-items: center;
  .lyb {
    width: 90%;
    height: 80px;
    line-height: 80px;
  }
  .side_gn {
    width: 90%;
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      button {
        margin-left: 5px;
      }
    }
  }
  .side_list_content {
    width: 90%;
    .side_list_content_warpper {
      border: 1px solid #999;
      border-radius: 5px;
      padding: 10px;
      margin-top: 10px;
      .sidelist_one {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        div > span {
          margin-right: 20px;
        }
      }
      .cz {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        .sidelist_text {
          width: 90%;
        }
      }
    }
  }
}
</style>
