<template>
  <div class="login" style="position: absolute; width: 100%; height: 100%">
    <img src="./icons/close.png" alt="关闭" @click="personal">
    <div class="ico">1</div>
    <input type="text" placeholder="请输入手机号" maxlength="11" id="phoneNumber" class="Verification">
    <input type="text" placeholder="请输入短信验证码" class="Verification">
    <span>找回密码</span>
    <button class="login">登录</button>
    <button class="register" @click="register">注册</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  created() {},
  methods: {
    personal() {
      this.test = 'personal';
      this.$router.push('/personal');
    },
    register() {
      this.test = 'register';
      this.$router.push('/auth/register');
    },
  },
};
</script>
<style scoped lang="scss">
  *{
    margin: 0;
    padding: 0;
    user-select: none
  }
  .login{
    img{
      margin: 100px 60px;
    }
    .ico{
      width: 200px;
      height: 200px;
      border-radius: 50%;
      margin: 60px auto;
      border: 1px solid #c7c7cc;
      text-align: center;
      background: #44a9ff;
    }
    .Verification{
      width: 90%;
      margin: 0 auto;
      border: none;
      border-bottom: 1px solid #c7c7cc;
      color: #c7c7cc;
      display: block;
      line-height: 180px;
    }
    span{
      color: #767676;
      line-height: 160px;
      margin-left: 80%;
    }
    .login{
      display: block;
      width: 90%;
      margin: 60px auto;
      line-height: 150px;
      color: white;
      border: none;
      background:linear-gradient(to right,#ff2d3d,#ff4e39,#ff6437);
      border-radius: 10px;
    }
    .register{
      display: block;
      width: 90%;
      margin: 60px auto;
      line-height: 150px;
      color: #797979;
      border: 1px solid #797979;
      border-radius: 10px;
      background: white;
    }
  }
  /* .underline{
     width: 50vw;
     height: 1px;
     background: orange;
     position: absolute;
     bottom: 0;
     left: 0;
   }
   .test-enter{
     transform: translate(-100vw,0);
   }
   .test-leave-to{
     transform: translate(100vw,0);
   }
   .test-enter-active,.test-leave-active{
     transition: all ease-in 2s;
   }
   .test-enter-to{
     transform: translate(0,0);
   }
   .test-leave{
     transform: translate(0,0);
   }*/
</style>
