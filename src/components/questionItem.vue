<template>
  <div class="wrapper">
    <div class="qItem">
      <h3>{{itemDetail.topic_name}}</h3>
      <p
        @click="writeAnswer(it.topic_answer_id)"
        :class="{active:answerid.includes(it.topic_answer_id)}"
        :key="index"
        v-for="(it,index) in itemDetail.topic_answer"
      >
        <span>{{symbolS[index]}}</span>
        {{it.answer_name}}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
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
    ...mapMutations(["writeAnswer"])
  },
  filter: {},
  computed: {
    ...mapState(["answerid"])
  },
  watch: {}
};
</script>

<style scoped>
.wrapper {
  margin-top: 26rem;
  display: flex;
  justify-content: center;
  background-image: url(data:image/png;base64,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);
  background-size: 100% 100%;
  /* margin-top: 2rem; */
  padding-top: 8rem;
  padding-bottom: 25rem;
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
}
.active {
  color: #f00 !important;
}
</style>
