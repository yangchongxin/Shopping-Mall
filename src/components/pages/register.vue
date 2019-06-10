<template>
  <div class="register" style="position: absolute; width: 100%; height: 100%">
    <h1>注册账号</h1>
    <input type="text" placeholder="请输入手机号" maxlength="11" id="phoneNumber" class="Verification">
    <input type="text" placeholder="请输入短信验证码" class="Verification">
    <span class="code" @click="getValidCode">发送验证码</span>
    <img src="./icons/hide.png" alt="隐藏">
    <input type="text" placeholder="请输入密码" class="Verification">
    <span class="ps">密码由8-16位数字、字母或符号组成，至少含有2种及以上的字符</span>
    <input type="checkbox" class="check">
    <p class="ok">已阅读并同意<span class="shopping">用户协议</span></p>
    <button>注册</button>
  </div>
</template>
<script>
export default {
  name: 'register',
  data() {
    return {
      isshow: null,
      usr: {
        phoneNumber: '',
      },
    };
  },
  methods: {
    getValidCode() {
      this.$http.validCode(this.usr.phoneNumber)
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(res.data.data);
          // // eslint-disable-next-line no-cond-assign,no-param-reassign,no-constant-condition
          // if (res.data.data.code === 1001) {
          //   this.$notice({
          //     message: '操作过于频繁,休息一会儿~',
          //     timout: 400,
          //     type: 'warning',
          //   });
          // }
          // // eslint-disable-next-line no-cond-assign,no-param-reassign,no-constant-condition
          // if (res.data.data.code === 1002) {
          //   this.$notice({
          //     message: '验证码发送成功,注意查收!',
          //     timout: 300,
          //     type: 'success',
          //   });
          // }
          // // eslint-disable-next-line no-cond-assign,no-param-reassign,no-constant-condition
          // if (res.data.data.code === 1003) {
          //   this.$notice({
          //     message: '参数不合法!',
          //     timout: 400,
          //     type: 'error',
          //   });
          // }
        })
        // eslint-disable-next-line no-console
        .catch(err => console.log(err));
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
  .register{
    position: relative;
    h1{
      margin:60px 0;
      font-size: 64px;
      text-align: center;
    }
    .Verification{
      width: 90%;
      margin: 0 auto;
      border: none;
      border-bottom: 1px solid #c7c7cc;
      color: #c7c7cc;
      display: block;
      font-size: 40px;
      line-height: 180px;
    }
    .code{
      border-left: solid 1px #c7c7cc;
      color: #666666;
      font-size: 40px;
      position: absolute;
      top: 450px;
      right: 115px;
      padding: 0 10px;
    }
    img{
      position: absolute;
      width: 60px;
      top: 630px;
      right: 115px;
    }
    .ps{
      color: #c7c7cc;
      font-size: 30px;
      margin: 30px 60px;
      display: block;
    }
    .check{
      margin-left: 60px;
    }
    .ok{
      display: inline-block;
      color: #c7c7cc;
      font-size: 40px;
      margin: 60px 0;
      span{
        color: #ff6037;
        margin-left: 10px;
      }
    }
    button{
      display: block;
      width: 90%;
      margin: 0 auto;
      line-height: 150px;
      color: white;
      border: none;
      background:linear-gradient(to right,#ff2d3d,#ff4e39,#ff6437);
      border-radius: 10px;
    }
  }
</style>
