<template>
  <transition name="drop" appear>
    <div class="el-notice_primary" v-if="isShow">
      <i></i>
      <span>{{message}}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'el-notice',
  props: {
    isShow: {
      type: Boolean,
      default: true,
    },
    timer: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.timer = setTimeout(() => { this.isShow = false; }, 5000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="scss" scoped>
  .el-notice_primary{
    position: absolute;
    top: 24px;
    left: 0;
    right: 0;
    background: #f0f9eb;
    line-height: 48px;
    width: 380px;
    border-radius: 4px;
    border: 1px solid #e1f3d8;
    color: #67c23a;
    margin: auto;
    padding-left: 24px;
    box-sizing: border-box;
    i{
      vertical-align: middle;
      display: inline-block;
      width: 16px;
      height: 16px;
      /*background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/*/
      /*9hAAAB1ElEQVQ4T6WTT0gUYRjGn2dm/6QICmaIIkLUqSAVD67BbJ68ePEgHqRIEF0iofBquiB0kq0wyJ1Dl9CDf+
      gQXrysjjJbh1CCTgVdSqkgkNhkdmfnjRlx/*/
      /*0yyG/idPj6e9/d9z/u8H3HOxbPqJz9dCWe/
      XeqCik4AtpPHXquE9uJ9W7ZfXwaIp24FDtVsApAxgDWlYhH5DvCOHjU3S8+
      LAAEnjMg6yMFKrgQyp2vpmVNNATC+3RsnMVutJQJ5elyf*/
      /*mX5140PG1XqAmBlpdWx8IRisCBA8kqCsIYc34Zaf1xeufr
      Y8wITREwOUF5WfjnsISAo2DQJNAgzomrnhAcaNSILgwwJAEAXlMcCbAhEhxq
      jCPC12dQKZ1LX08xPAds88qUwVAfL6T0Pmdu1R3RLFWc0F+*/
      /*U61abo3l2geJKPpZycWdnpHIXhZFhuwgVprMJ8NtQdy2AHZXB4r+t1IPcCo0dkUxIWvBEM+*/
      /*yC6AywRafP358avxqG312sdsMUYjskDwfrUYvejEGV6Mvl0pxOhu3Ck8UK1lgkNVIImkZhb69e8oK9Y8wBiIsM/*/
      /*Ob0KeJLV02bCd+ZnupjoaQkrNCBReVAQHeQf7rLP29e73uYqf6X/8+zV/*/
      /*Aex6pBFqPUViAAAAAElFTkSuQmCC');*/
    }
    span{
      line-height: 16px;
      font-size: 14px;
    }
  }

  .drop-enter{
    top: -40px;
    opacity: 0;
  }
  .drop-enter-active{
    transition: all .2s ease-in-out;
  }
  .drop-enter-to{
    top: 24px;
    opacity: 1;
  }
  .drop-leave{
    top: 24px;
    opacity: 1;
  }
  .drop-leave-active{
    transition: all .3s ease-in;
  }
  .drop-leave-to{
    top: -40px;
    opacity: 0;
  }
</style>
