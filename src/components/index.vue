<template>
  <div v-if="!complete">
    <QuestionItem :itemDetail="getCur"></QuestionItem>
    <div class="btn">
      <button v-if="itemNum<4" @click="nextQuestion(itemNum+1)">下一题</button>
      <button v-if='itemNum==4' @click="submit()">提交</button>
    </div>
  </div>
</template>

<script>
import QuestionItem from "./components/questionItem";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "App",
  components: {
    QuestionItem
  },
  computed: {
    ...mapState(["itemNum", "itemDetail","complete"]),
    ...mapGetters(["getCur"])
  },
  methods: {
    ...mapMutations(["nextQuestion","submit"])
  }
};
</script>

<style>
.btn {
  text-align: center;
  margin-top: 40px;
}
</style>
