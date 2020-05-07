<template>
  <div class="clearfix" style="height:100%">
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Alert ref="alert"></Alert>
  </div>
</template>
<script>
import Vue from 'vue';
import Alert from './components/alert.vue';
export default {
  name: "App",
  components:{
    Alert
  },
  mounted(){
      Vue.prototype.$alert = this.$refs.alert;
  }
};
</script>
