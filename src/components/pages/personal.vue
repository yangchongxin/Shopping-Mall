<template>
  <div class="personal">
    <!--登录注册-->
    <div class="header">
      <div class="PersonalCenter">个人中心</div>
      <div class="HeadPortrait"></div>
      <span @click="login">登录/注册</span>
    </div>
    <div class="Bodily">
      <!--关注-->
      <div class="Care">
        <div class="Concerned">
          <p class="top">0</p>
          <p class="text">我的关注</p>
        </div>
        <div class="Concerned">
          <p class="top">0</p>
          <p class="text">签到礼金</p>
        </div>
        <div class="Concerned">
          <p class="top">0</p>
          <p class="text">优惠券</p>
        </div>
      </div>
      <!--待付款-->
      <div class="state">
        <div class="payment">
          <img src="./icons/payment.png" alt="">
          <p class="text">待付款</p>
        </div>
        <div class="payment">
          <img src="./icons/received.png" alt="">
          <p class="text">待收货</p>
        </div>
        <div class="payment">
          <img src="./icons/completed.png" alt="">
          <p class="text">已完成</p>
        </div>
        <div class="more">
          <img src="./icons/more.png" alt="">
        </div>
        <div class="payment">
          <img src="./icons/orders.png" alt="">
          <p class="text">全部订单</p>
        </div>
      </div>
      <!--砍价团-->
      <div class="column">
        <div class="Bargain">
          <img src="./icons/155745633201413553.png" alt="">
          <p class="text">砍价团</p>
        </div>
        <div class="Bargain">
          <img src="./icons/received.png" alt="">
          <p class="text">新人红包</p>
        </div>
        <div class="Bargain">
          <img src="./icons/155745620576685615.png" alt="">
          <p class="text">一元邀新</p>
        </div>
        <div class="Bargain">
          <img src="./icons/completed.png" alt="">
          <p class="text">收货地址</p>
        </div>
      </div>
    </div>
    <!--猜你喜欢-->
    <div class="Guess">
      <span class="Guess_left"></span>
      <span class="Guess_center">猜你喜欢</span>
      <span class="Guess_right"></span>
    </div>
    <div class="recommend">
      <div class="content"></div>
      <div class="content"></div>
    </div>
    <!--底部导航栏-->
    <div class="container-app-bottom">
      <div class="container-app-bottom-my" @click="index">
        <img src="./icons/155352224914259456.png" alt="">
        <p>首页</p>
      </div>
      <div class="container-app-bottom-my">
        <img src="./icons/155352235108424095.png" alt="">
        <p>找货</p>
      </div>
      <div class="container-app-bottom-my">
        <img src="./icons/155352230873073172.png" alt="">
        <p>拼购推荐</p>
      </div>
      <div class="container-app-bottom-my">
        <img src="./icons/155352220182354151.png" alt="">
        <p>玩法介绍</p>
      </div>
      <div class="container-app-bottom-my" @click="personal">
        <img src="./icons/155352224914259456.png" alt="">
        <p>我的拼购</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'personal',
  data() {
    return {
      test: null,
    };
  },
  created() {},
  props: {},
  methods: {
    login() {
      this.test = 'login';
      this.$router.push('/auth/login');
    },
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
  .personal{
    background: #f2f2f2;
    /*overflow: hidden;*/
    width: 100vw;
    height: 100vh;
    .header{
      background: #eb4f3f;
      height: 550px;
      .PersonalCenter{
        width: 100%;
        line-height: 246px;
        text-align: center;
        color: white;
        font-size: 58px;
        font-weight: bold;
      }
      .HeadPortrait{
        width: 177px;
        height: 177px;
        border-radius: 50%;
        background: white;
        margin-left: 50px;
        display: inline-block;
        vertical-align: middle;
      }
      span{
        width: 258px;
        height: 70px;
        line-height: 70px;
        border-radius: 50px;
        border: 1px white solid;
        text-align: center;
        color: white;
        font-size: 30px;
        margin-left: 80px;
        vertical-align: middle;
        display: inline-block;
      }
    }
    .Bodily {
      position: relative;
      top: -100px;
      /*关注*/
      .Care {
        background: white;
        width: 90%;
        margin: 20px auto;
        border-radius: 30px;
        .Concerned {
          display: inline-block;
          width: 32%;
          height: 200px;
          text-align: center;
          .top{
            color: black;
            font-size: 30px;
            margin-top: 40px;
          }
          .text {
            color: #6e6e6e;
            font-size: 30px;
            margin-top: 30px;
          }
        }
      }
      /*待付款*/
      .state {
        background: white;
        width: 90%;
        margin: 40px auto;
        border-radius: 30px;
        .payment {
          display: inline-block;
          width: 23.3%;
          height: 260px;
          text-align: center;
          font-size: 12px;
          img {
            display: inline-block;
            width: 100px;
            height: 100px;
            margin-top: 40px;
          }
          p {
            color: #666;
            font-size: 30px;
            margin-top: 20px;
          }
        }
        .more {
          display: inline-block;
          width: 1%;
          img {
            display: inline-block;
            width: 80px;
            height: 150px;
          }
        }
      }
      /*砍价团*/
      .column {
        background: white;
        width: 90%;
        margin: 40px auto;
        border-radius: 30px;
        .Bargain {
          display: inline-block;
          width: 24%;
          height: 260px;
          text-align: center;
          font-size: 12px;
          img {
            display: inline-block;
            width: 100px;
            height: 100px;
            margin-top: 40px;
          }
          p {
            color: #666;
            font-size: 30px;
            margin-top: 20px;
          }
        }
      }
    }
    .Guess {
      text-align: center;
      width: 100%;
      height: 160px;
      margin: auto;
      .Guess_left {
        display: inline-block;
        width: 330px;
        border-bottom: #dddddd solid 3px;
        margin-right: 20px;
      }
      .Guess_center {
        display: inline-block;
        vertical-align: middle;
        color: black;
        font-size: 50px;
      }
      .Guess_right {
        display: inline-block;
        width: 330px;
        border-bottom: #dddddd solid 3px;
        margin-left: 20px;
      }
    }
    .recommend{
      width: 90%;
      overflow: hidden;
      margin: 50px auto;
      .content{
        background: aquamarine;
        width: 49%;
        height: 830px;
        border-radius: 50px;
        display: inline-block;
      }
    }
    /*底部导航栏*/
    .container-app-bottom{
      width: 100%;
      height: 160px;
      background: white;
      position: fixed;
      bottom: 0;
      left: 0;
      .container-app-bottom-my{
        display: inline-block;
        width: 19%;
        text-align: center;
        img{
          width: 80px;
          margin-top: 10px;
        }
        p{
          color: #686868;
          font-size: 30px;
          margin-top: 10px;
        }
      }
    }
  }
</style>
