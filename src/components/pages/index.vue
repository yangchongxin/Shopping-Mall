<template>
    <div class="container">
      <div class="container-head">
        <!--轮播图-->
        <div class="container-head-rotationChart" >
          <van-swipe :autoplay="3000" indicator-color="white" >
            <van-swipe-item v-for="(val) in Chart" :key="val.id">
              <img :src="val.Chartiamges">
            </van-swipe-item>
          </van-swipe>
        </div>
        <!--搜索框-->
        <div class="container-head-search" @click="search">
          <img src="./icons/search.png"/>
          <span>玩具</span>
        </div>
        <!--导航栏-->
        <div class="container-head-nav">
          <van-tabs v-model="active">
            <van-tab title="精选"></van-tab>
            <van-tab title="食品"></van-tab>
            <van-tab title="母婴"></van-tab>
            <van-tab title="家居"></van-tab>
            <van-tab title="女装"></van-tab>
            <van-tab title="生鲜"></van-tab>
            <van-tab title="百货"></van-tab>
          </van-tabs>
        </div>
        <!--<div class="container-head-nav-drop-down-box">-->
          <!--<img src="./icons/dropDown.png" alt="">-->
        <!--</div>-->
      </div>
      <div class="container-app">
        <!--全场一元起拼-->
        <div class="container-app-activity">
          <img src="./banner/155921683498601203.png" alt="">
          <img src="./banner/155921685876387844.png" alt="">
        </div>
        <div class="container-app-function">
          <div class="container-app-link">
            <img src="./icons/155745615565685465.png" alt="">
            <p>每日签到</p>
          </div>
          <div class="container-app-link">
            <img src="./icons/155745620576685615.png" alt="">
            <p>一元邀新</p>
          </div>
          <div class="container-app-link">
            <img src="./icons/155745633201413553.png" alt="">
            <p>砍价团</p>
          </div>
          <div class="container-app-link">
            <img src="./icons/155745634336643149.png" alt="">
            <p>一分好礼</p>
          </div>
          <div class="container-app-link">
            <img src="./icons/155367739181460729.png" alt="">
            <p>拼购国际</p>
          </div>
          <div class="container-app-link">
            <img src="./icons/155849473466877746.png" alt="">
            <p>8.8包邮</p>
          </div>
          <div class="container-app-link">
            <img src="./icons/155745638811844821.png" alt="">
            <p>食品超市</p>
          </div>
          <div class="container-app-link">
            <img src="./icons/155911181443788272.gif" alt="">
            <p>母婴馆</p>
          </div>
          <div class="container-app-link">
            <img src="./icons/155298317461154674.png" alt="">
            <p>生活家电</p>
          </div>
          <div class="container-app-link">
            <img src="./icons/155745636672018807.png" alt="">
            <p>特色馆</p>
          </div>
        </div>
        <!--今日必拼-->
        <div class="container-app-assemble">
          <div class="left">
            <img src="./icons/flash.png" alt="">
            <span class="spell">今日必拼</span>
          </div>
          <div class="right">
            <span class="more">更多</span>
            <img src="./icons/goToday.png" alt="">
          </div>
          <div class="content">
            <!--van-swipe-item-->
            <div class="content-commodity">
              <span></span>
              <p>拼</p>
            </div>
            <div class="content-commodity">
              <span></span>
              <p>拼</p>
            </div>
            <div class="content-commodity">
              <span></span>
              <p>拼</p>
            </div>
            <div class="content-commodity">
              <span></span>
              <p>拼</p>
            </div>
          </div>
        </div>
        <!--热卖榜-->
        <div class="container-app-bestSellers">
          <div class="title">
            <img src="./icons/ranking.png" alt="">
            <span>热拼榜</span>
          </div>
          <div class="bestSellers-hotSpell">
            <div class="hotSpell"></div>
            <div class="hotSpell"></div>
            <div class="hotSpell"></div>
          </div>
        </div>
        <!--精选热卖-->
        <div class="container-app-selected">
          <img src="./icons/star.png" alt="">
          <span>精选热卖</span>
        </div>
      </div>
      <!--底部导航栏-->
      <div class="container-app-bottom">
        <div class="container-app-bottom-my">
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
/* eslint-disable no-console */

import require from '../../mock/index';

export default {
  name: 'index',
  data() {
    return {
      active: 2,
      Chart: '',
      List: '',
    };
  },
  methods: {
    personal() {
      this.test = 'personal';
      this.$router.push('/personal');
    },
    search() {
      this.test = 'search';
      this.$router.push('/search');
    },
  },
  created() {
    require.Chart(this.Chart)
      .then((res) => {
        this.Chart = res.data.data;
        console.log(res.data.data);
      }).catch();
    require.getindex(this.List)
      .then((res) => {
        this.List = res.data.data;
      }).catch();
  },
};
</script>

<style scoped lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  .container{
    position: relative;
     /*头部 */
    .container-head{
      /*轮播图*/
      .container-head-rotationChart{
      }
      /* 搜索框 */
      .container-head-search{
        position: absolute;
        top: 0;
        padding: 10px 0;
        background: #fff;
        width: 90%;
        height: 107px;
        border-radius: 80px;
        margin: 30px 5%;
        text-align: center;
        img{
          width: 80px;
          margin-right: 15px;
          display: inline-block;
          vertical-align: middle;
        }
        span{
          font-size: 50px;
          color: #b0b0b0;
          display: inline-block;
          vertical-align: middle;
        }
      }
      //导航栏
      .container-head-nav{
        width: 100%;
        position: absolute;
        top: 185px;
        display: inline-block;
        background: none;
        .container-head-nav-drop-down-box img{
          position: absolute;
          right: 0;
          top: 104px;
          width: 100px;
          height: 100px;
          z-index: 99;
          box-shadow: -10px 0 5px 0 #e05d55;
        }
      }
    }
    .container-app{
      width: 100%;
      overflow: hidden;
      margin-bottom: 160px;
      /*height: 100%;*/
      background: #f2f2f2;
      /*全场一元起拼*/
      .container-app-activity {
        background: #f7f7f7;
        width: 100%;
        height: 330px;
        font-size: 0;
        animation: animatedBackground 2.5s .15s linear infinite;
        @-webkit-keyframes animatedBackground {
          10% {transform: rotatey(30deg);}
          20% {transform: rotatey(-30deg);}
          30% {transform: rotatey(10deg);}
          40% {transform: rotatey(0deg);}
          50%, 100% {transform: rotatey(5deg);}
        }
        img {
          width: 50%;
          height: 330px;
          cursor: pointer;
        }
      }
      /*链接*/
      .container-app-function{
        background: #ffffff;
        width: 90%;
        margin: 0 auto;
        border-radius: 30px;
      }
      .container-app-link{
        margin-top: 30px;
        margin-bottom: 30px;
        width: 18.6%;
        display: inline-block;
        text-align: center;
        img{
          width: 140px;
        }
        p{
          color: #6e6e6e;
          font-size: 30px;
        }
      }
      /*今日必拼*/
      .container-app-assemble{
        width: 90%;
        background: white;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        margin: 30px auto;
        font-size: 0;
        .left{
          display: inline-block;
          vertical-align: middle;
          margin: 30px;
          img{
            width: 60px;
            display: inline-block;
            vertical-align: middle;
          }
          .spell{
            display: inline-block;
            vertical-align: middle;
            font-size: 50px;
            color: #4f4f4f;
          }
        }
        .right{
          display: inline-block;
          vertical-align: middle;
          margin-left: 580px;
          img{
            width: 60px;
            display: inline-block;
            vertical-align: middle;
          }
          .more{
            font-size: 40px;
            color: #7f7f7f;
            display: inline-block;
            vertical-align: middle;
          }
        }
        .content{
          width: 100%;
          text-align: center;
          .content-commodity{
            display: inline-block;
            span{
              width: 224px;
              height: 250px;
              border: 1px solid saddlebrown;
              display: inline-block;
              border-radius: 20px;
            }
            p{
              width: 23.5%;
              font-size: 30px;
              color: #757575;
              display: inline-block;
              margin: 20px 0;
            }
          }
        }
      }
      /*热卖榜*/
      .container-app-bestSellers{
        width: 90%;
        background: white;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
        margin: 0 auto;
        .title{
          img{
            width: 60px;
            display: inline-block;
            vertical-align: middle;
            margin: 30px;
          }
          span{
            text-align: right;
            font-size: 50px;
            color: #4b4b4b;
            display: inline-block;
            vertical-align: middle;
          }
        }
        .bestSellers-hotSpell{
          margin: 30px;
          .hotSpell{
            display: inline-block;
            font-size: 0;
            width: 31.5%;
            height: 440px;
            border: 2px solid #f5d2ce;
            border-radius: 20px;
          }
        }
      }
      /*精选*/
      .container-app-selected{
        width: 100%;
        height: 150px;
        text-align: center;
        img{
          width: 70px;
          display: inline-block;
        }
        span{
          font-size: 80px;
          color: #e85134;
        }
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
      font-size: 0;
      .container-app-bottom-my{
        display: inline-block;
        width: 20%;
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
