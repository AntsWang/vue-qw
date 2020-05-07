<!--  -->
<template>
  <div class="wraper">
    <div class="score">
      <div class="text">
        <h1 style="color:#a51d31;font-weight:bold">{{totalScore}}分</h1>
        <p style="color:#3e2415">好好学习，天天向上</p>
      </div>
    </div>

    <div class="shareBtn" @click="share"></div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  data() {
    return {};
  },
  computed:{
      ...mapState(['totalScore'])
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
      //document.body.style.backgroundImage = 'url(../assets/4-1.jpg)';
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods:{
    share(){
      let option = {
        title:'我是标题',
        message:'我是一行内容',
        confirmCallback:this.confirm
      }
      this.$alert.showAlert(option);
    },
    confirm(){
      console.log('other');
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.wraper {
  height: 100%;
  display: flex;
  background: url("../assets/4-1.jpg");
  flex-direction: column;
  align-items: center;
}
.score {
  width: 70%;
  height: 37%;
  background: url("../assets/4-2.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.text {
  width: 80%;
  height: 55%;
  position: absolute;
  bottom: 9px;
  left: 17%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.shareBtn {
  width: 10em;
  height: 56px;
  margin: 10px auto;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOkAAABgCAMAAADPVqXBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFlUExURUxpcf///////////////9/b2f///////z8kFf////////////7+/f///////////////////////5CAd6ygmUwyI2hTRj8kFI19cz8kFD8kFMG1pm9UMv/ljGVLLHtpXv7FAPm0BrliFT8kFKMeMfm1Bvq3Bf3CAfy/AvCeAP7EAPu6A//ljJtTFPvBK/////KkA6AeMP7NJZYcLZ0dL/y9A/SoAHkWJIMYJ/7HCtBuGvq6Fv3OPI0aKvq3DpxrC24UIJdhCT0LEeGNEE0PFrdEJWISHeaYDVkRGf7KF9CVBaYnLf/xx9d9FKB1Df/qq/u9IcmKCP7suvzLTm84Dv/mnfSwBv3ad/7XUK0yK2U2DvzSZatwCemqBd2fBcBTIbx1DshlG7mBB/7daHpADvzbhf3fkZ48H1kmEP/00aljD4lEE4dRC//jhW4rFPG4AYYuHcWrdv/653NeTrGQRMu6luzJcPnn14sAAAAgdFJOUwAlMDoKAhsFgBJETYBUY29aopL8q/uORJ+y19NAn5/cGey9hgAAENVJREFUeNrsmol3ElkWh+OMu6OjY3dPz3qqtFiETMZKVQQSCIQlEJAYElJmKwKI2RW3/v/nd+97tRBAUzZ6zDlzPSfWQr2637vrezA19X/5QeWalBuQq0JuQa77hS7g+o0b9MHLDSopJeEVyB8gfyShA5wTLsFeu6SwPmsyJSMC7/btO3fu3GW5c+f2beJl2MtrV8+egpMwbwPx/r179/7MgoP7dwmWWW85rJcW1OWELYEJwj+5QrR37wpWz6yXG5ScFtYkyr+QPKA/DAvWO37Uy8Xq5CIfqLAncT5whWFhVz/qVZf0n/86mP7xZf2/n5cPxx/oz/Hx8wew6n1G9cUqTda/X09fBvnwJVL+wDGhrv8DqK5RBSpI//Z++uXW7OzsDMssy4zvZGb4xuwEbgR++kukx8/p7/r6i/X15+sPYVSqNq5Rb0xN3dyZTiuKElVZ4jhUYmE+DsfoZE7ciNJxJOS7EefjUIRvDD8tbshh54aGjQ8Py08PDDug1MbnUT88f34M3PUXLzYPNp+//+me5763BOnfP26df9k3UlUOG/Pd4Kdj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)
    no-repeat;
  background-size: 100% 100%;
}
</style>