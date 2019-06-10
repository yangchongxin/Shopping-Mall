<template>
  <div class="container">
    <div class="container-head">
      <img src="./icons/false.png" alt="" @click="index">
      <input type="text" placeholder="防晒">
      <span>搜索</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {};
  },
  methods: {
    index() {
      this.test = 'index';
      this.$router.push('/index');
    },
  },
};
</script>

<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
}
.container{
  .container-head{
    margin: 50px;
    img{
      width: 50px;
      display: inline-block;
      vertical-align: middle;
    }
    input{
      font-size: 50px;
      margin-left: 5px;
      display: inline-block;
      vertical-align: middle;
      width: 900px;
      height: 110px;
      border: none;
      text-indent: 120px;
      background: url("./icons/search.png") no-repeat 30px #f2f2f2;
      background-size: 80px 80px;
      border-radius: 80px;
    }
    span{
      vertical-align: middle;
      color: #333333;
      font-size: 45px;
      margin-left: 50px;
    }
  }
}
</style>
