<!--  -->
<template>
  <div v-if="isShow" class="alertWrapper">
    <div class="alertBox">
      <div class="alertTitle">
        <span>{{title}}</span>
        <i @click="closeAlert">X</i>
      </div>
      <div class="alertContent">{{message}}</div>
      <div class="alsertBtn">
        <span class="cancel" @click="closeAlert">取消</span>
        <span class="confirmBtn" @click="confirmFunc">确定</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      title: "标题",
      message: "我是一段内容",
      confirm: function() {console.log('self')}
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    closeAlert() {
      this.isShow = false;
    },
    showAlert(options = {}) {
      this.title = options.title || this.title;
      this.message = options.message || this.message;
      this.confirm =
        typeof options.confirmCallback == "function"
          ? options.confirmCallback
          : this.confirm;
      this.isShow = true;
    },
    confirmFunc() {
        console.log(this.confirm);
      this.confirm();
      this.isShow = false;
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.alertWrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}
.alertBox {
  width: 80%;
  margin: 67% auto;
  background: #fff;
  padding: 0.6em;
  border-radius: 10px;
}
.alertTitle {
  display: flex;
  justify-content: space-between;
}
.alertContent {
  padding-top: 10px;
  padding-bottom: 10px;
}
.alsertBtn {
  text-align: end;
}
.alsertBtn span.cancel {
  display: inline-block;
  padding: 2px 8px;
  border: 1px solid #ccc;
  margin-right: 8px;
  border-radius: 6px;
  color: #333;
}
.alsertBtn span.confirmBtn {
  display: inline-block;
  padding: 2px 8px;
  background: #409eff;
  border-radius: 6px;
  color: #fff;
}
</style>