<template>
  <div class="wraper">
    <div class="img"></div>
    <a class="start" href="#/questions"></a>
    <Week :level="level" />
  </div>
</template>

<script>
import Week from '../components/week';
import {mapState} from 'vuex';
export default {
  name: "",
  components: {
    Week
  },
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {},
  filter: {},
  computed: {
    ...mapState(["level"])
  },
  watch: {}
};
</script>

<style scoped>
.wraper {
  padding-top: 100px;
  width: 100%;
  height: 100%;
  text-align: center;
}
.img {
  margin: 0 auto 20px;
  width: 80%;
  height: 200px;
  background: url("../assets/1-2.png");
  background-size: 100% 100%;
}
.start {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAABUCAMAAADH7EegAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAEUUExURUxpcf///f/////////++v/++//++2Q3JPffnP/ljP/55f/+/P/10/7zzWk6I24/Im5AJoVdRp9+Z/rIFGQ3JP/ljP/zyuS0E8use5VxW/7mnve6CPnJEHNCIWQ3JKMeMbliFfe8CPjDCPi/CPjCCPnIDvnIDPnGCfCeAP/ljGw9I4FOL6JnO4RQK////8RuEW08I5wdL/a0B5AbK/i/GfnKF/7xyPrOPOOZEsSPC/rSUD0LEf3ssvnFLfvYZdF7HfrNJHdHKPzeeYYaJ/3onlQPGOmsDpZjD14SG4tXHdelEdKaDq89KmEzDqUpLmwUH3gXI++9EEkVEtmLFqhzDrtUJIZcQclrH5NfMn9KE5hxT66JXIS0JyQAAAAbdFJOUwDIO1IMFyiABMT6deOGVI/JNZ6/8H7D4sXd9PsX0fEAAAhESURBVGje7ZqLUuJIFIaz13GcGUd3Zme3KkAgJN53MVwEFERAg4ZruAwy+/7vsed0d0hC0knrYi1UzW+VhLabfPw5Od2noyR910u0Q/Uz1S9U5BibNw7VgfwV9CMTHiPzJvEyVkoKjD+5IsQRvDv/g6itBBUI33lEgHm8v/7+9jX15QcRvQft7u7iy/sv77y4Ptaffz95Vd39LabLy1182b0Evf/gwfXRvjLsSU2QFoylLwQX3Q2h/eXk5KZ+dJgA6YdqRqbKaKstshbfJ7SlLEhbq10ibK1Wu6tdXn5xzfVZ2ypn1SMdz3KkZtlJli3aGlpOdoUCARAv0VigvTupXb4LpX1bj/LIMTajshZNoI+g+8VisV4vl69uWq2Tu7sa0hIBLsTPh2Uo+Giz2jOcXZf7ajaSFnDDaT89x9nnxuxqi+8KUdqrcNoWh5brmtuird1ZIOfR1kgkAG1Y3H5a170ff4U0X+wXAfe2jLQ3LcjKNQeX0LaiaH3fPyHg0Tr6FIul21tKS80lvDUaCDcrtDt7bz6C/ni2s/I6nIUGAlv249YYbOvmz99QB4z2TTNJZL2Ss3GjMlkdaBluC2OB8WJCaN3c/PPt29evX8/2D5D2TZLJeo2YxXu/Ou73+66zdr8/tXx9Si6tg0tEYK8I7RnoQJL2mLPJU0vENbMaoa7KfMz4RnUe2qO229IZj4b3fdv9ZJ3Q3jo3GvKeICqGwc0V0KK1Z83mviTtO9amrFVnEyGuTa8j1LdDvV6MFKW3bFHHQ8Mo5NxzASzBJRPEEhdZCewVhQXapiQ1l7RdkeibDgt89ezQUf22osyXLdN7eDsDWNO5iiUiSLkEl/K2CCvClh1rm0lJSrq0K87qYVE8BZ+4Atqgs4nDfkFRGk6L3R8ailKRrcexxT4ZWRNkhmDuAi/+Iqzl8jfH2jDa6Ps6jjZs1H0B8djd0Lkn7NPr8fAxT/uUSrpaLLq4FBhfAbZePz+jsGG0MXe6OamAZoA2IEegBnilzPHIDI6qQjq4hw69JBws7ER3DF93lpfNYcEwGuryKmb8uIQUja3Xb88d2CCtWMZMgz8Dk7VM0O4GZ9T0fjiEOFWM0RAObLsP1g4wYtPwFQa2ZxTBJYlsKYCv394+NRlsgFYwq3baSMtaqg9w4gZn1BSj1I2U6bgNFwV7mPARRs4dRdY2LO9SzjqFBVoGu0orun4itBXWsqQNzyHeuK5C9lLmeWA1u49orumd04os72IyYyo5tMkgrfB8RWllH234qG563gPO2ZyEensIITRbQAj3x5jIjJk7KlPUad69LUEAww/zuvTkwPppxVemXtoso+WNMgfwZ/NogqFegF9KYQRqtwsYIoal+eY0mnkd0bePp8lkiLc8Z4NzmpdWo7Tc62HBxR8cJqrwMuuRgDA8oZx2qxIGm1iBJbQh3oqv+V1aaKG03FFTSGA9SA4QwPMcetsDzRqNBsmDxsRdmSCajnUaWfNqOp3kDsNprfDVq8dZ2exQ4VyqzNibBdLOpuTYDEZ6B/48gy+ItGZuMqmYZp72scD0hum7inT+zEA1kVXpHKerEbTRzlrX90QPJP4e2JsRyafk2AqO6sOfJ3Rp0/Cv8NRcJeJcJDASh1qWS+tZ4Yeuw6wHg4rFn+cdPTKD9QVkWMVM6PhSYZ+j00/W5IjaWi/Rs8sylzZuhWs9GEqkzIBHFq4L7ISJL3l5dY05FZg/ObRxzkKkxdKuRrqKYdtLHOKtCGvcMaQur3K+zCMHchG+49B6vpsWXXFhJuo5PlbwGzR412Mxgnupqy0wgckyOuxVQ2D+5NAK16km3mVk6Y19MJPiacNHdZGv3cGwnYTRxu+rcfJtYEeG9227eNKZ00LzLbeWM+FCGDjl9kw5Sxa3bKU5QFqB+ZNDG+8scx9jUZk7fSgtf5SNcYMpGXwkC3PWp43DBHYsI2lD9rpWvM6TYmXitFDaCI9MOuGij4SW9SHDBObPKNp4Z+UqBqFiO33YOiFin3dKotVI2wlCy/o4C824HYkIWoE4Mvt4nt6yhdJGjKpe02Ku/Wgj7SS7QhuzMuHTCjhrLoi1jWWLt3YIc9YaO5mgMMVkMmd7JWxY7F4Pl1bI2euRQbKtJlI7ZOUulmJKb05SNA41Hug8xobF7hDxaAVqh+p4PCKzgdvHrR3CdtC74zFZXmpzqGt0UqU5myW+K8SvCXn5Nt7ZxfV9mxTkqtsnsnaYkopGmRzp+nySOArMDgJ7bxxagb3X7oicbq56+kTWDuYCB0ycKA7QaoEnEYE75j/UDhXInYOG5u0TXTvAlDWYqI5rSDv3zWXx+7xitUN4HKmznulvsbu4TRMY5axeK9B/6RrJYKzPyFiuzyOcPYysHWKf1tj2M/fCbU88VvGLsT4WHgvsoEfVDmt6fiMQj5FPMz0tL64d1vvcISM2il87rPU5WEw8ijkrUju81DX9FZ6wcTLYup6DvbDP82qHqkgcZV4Uj5kX9WGr6XDaXH49T3PXez3yx4tQ2vTxcX7d/+0hHLNcZ48ryVDaTgVw83kobIgyeUcva8nw+mQF+jgtx8fHOQ5tDnA3To10OO1jOj3ZNNZKLs2hTaZBuY0SEqVTYbSnqU56EwU2htBepC42EXfhWuulBdzUYtN4H5Mp11ofLcQC6GKDhECnSQ4t2Hu6Ybq4SPJpN1zfaV+TtrlVtE/bA9sE2r+2hvYJIuF8S3CbT0CbOjs/f/pr8/V0fn4KtKkzONgCPZ2mJOkzzG7Ns41XE2dhSdpPbY8kae/z1sDuS9LOx22B/byH/y38cTvc3T+g/zB+sPdm87W3I0n/Aip/TsiVOmPFAAAAAElFTkSuQmCC);
  display: block;
  width: 30%;
  background-size: contain;
  height: 40px;
  background-repeat: no-repeat;
  margin: 0 auto;
  background-position: 50%;
}
</style>
