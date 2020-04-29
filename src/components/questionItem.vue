<template>
  <div class="wrapper">
    <div class="qItem">
      <h3>{{itemDetail.topic_name}}</h3>
      <p @click="writeAnswer(it.topic_answer_id)" :class="{active:answerid.includes(it.topic_answer_id)}" :key="index" v-for="(it,index) in itemDetail.topic_answer">
        <span >{{symbolS[index]}}</span>
        {{it.answer_name}}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState,mapMutations } from "vuex";
export default {
  name: "questionItem",
  props: ["itemDetail"],
  data() {
    return {
      symbolS: ["A", "B", "C", "D"]
    };
  },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    ...mapMutations(['writeAnswer'])
  },
  filter: {},
  computed: {
    ...mapState(['answerid'])
  },
  watch: {}
};
</script>

<style scoped>
.wrapper {
  display: flex;
}
div h3,
div p {
  color: #fff;
}
p {
  margin-top: 8px;
}
span {
  font-size: 10px;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  text-align: center;
  display: inline-block;
  border: 1px solid #fff;
  color: #fff;
  line-height: 16px;
  margin-right: 3px;
}
.qItem {
  display: inline-block;
  margin: auto;
  margin-top: 40%;
}
.active{
  color:#f00!important;
}
</style>
