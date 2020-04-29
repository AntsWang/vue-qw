<template>
  <div>
    <router-view></router-view>
    <Week :level="level"/>
  </div>
</template>
<script>
import Week from "./components/week";
import { mapState } from "vuex";
export default {
  name: "App",
  components: { Week },
  computed:{
    ...mapState(['level'])
  }
};
</script>

<style>
.btn {
  text-align: center;
  margin-top: 40px;
}
</style>
