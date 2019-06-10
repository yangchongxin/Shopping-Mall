<template>
  <div>
    <!--<div class="header">-->
      <!--<img class="return" src="./img/false.png" @click="index"/>-->
      <!--<span class="title">权限认证</span>-->
    <!--</div>-->
    <!--<div class="icon">-->
      <!--<img src="./img/index.jpg">-->
    <!--</div>-->
    <!--<div class="submit">-->
      <!--<span @click="left_login">登录</span>-->
      <!--<span>|</span>-->
      <!--<span @click="right_register">注册</span>-->
    <!--</div>-->
    <transition name="test">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'auth',
  data() {
    return {
      test: null,
    };
  },
  created() {},
  props: {},
  methods: {
    left_login() {
      this.test = 'test-left';
      this.$router.push('/auth/login');
    },
    right_register() {
      this.test = 'test-right';
      this.$router.push('/auth/register');
    },
    index() {
      this.$router.push('/index');
    },
  },
};
</script>

<style scoped lang="scss">
  .header{
    .return{
      width: 25px;
      height: 35px;
      margin: 30px;
      vertical-align: middle;
    }
    .title{
      vertical-align: middle;
      line-height: 60px;
      font-size: 30px;
      position: relative;
      left: 30%;
    }
  }
  .icon img{
     width: 80px;
     display: block;
     margin: 30px auto;
   }
  .submit{
    font-size: 0;
    margin-top: 50px;
    span{
      display: inline-block;
      width: 33.3333%;
      text-align: center;
      font-size: 30px;
      line-height: 60px;
      color: black;
    }
  }

  .test-enter{
    transform: translate(-100vw,0);
  }
  .test-leave-to{
    transform: translate(100vw,0);
  }
  .test-enter-active,.test-leave-active{
    transition: all ease-in 0.5s;
  }
  .test-enter-to{
    transform: translate(0,0);
  }
  .test-leave{
    transform: translate(0,0);
  }
</style>
