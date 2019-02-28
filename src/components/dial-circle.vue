
<template>
  <div class="com-dial" :class="{'actived': state.dial.is_show}" catchtouchmove="true">
    <div class="com-dial-box">
      <div class="header">
        <div>步数增减明细</div>
      </div>
      
      <div class="content">
       <!-- <div class="circle">

       </div> -->

      <div class="circle">
        
      </div>

      <div class="con">
         <div class="percent-circle percent-circle-left">
          <div class="left-content"></div>
        </div>
        <div class="percent-circle percent-circle-right">
          <div class="right-content"></div>
        </div>
        <div class="text-circle">0%</div>
      </div>

      </div>
      <div class="btns">btn</div>
      <div class="close" @click="closeDial">
        <img class="btn-close" src="/static/images/btn-close.png" alt srcset mode="aspectFill">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comdial',
  props: ['header', 'content'],
  methods: {
    closeDial () {
      this.$store.commit('toggleDial')
    }
  },
  computed: {
    state () {
      return this.$store.state
    }
  }
}
</script>

<style lang="stylus">

c(x) {
  (((x / 2))) px
}
ptl(x, y) {
  left (x / 2) px
  top (y / 2) px
}
cwh(x, y) {
  width x == 0 ? auto : ((((x / 2)))) px
  height (y / 2) px
}
.com-dial {
  w = 442
  circle_w = 30
  .circle {
    width:c(w); height:c(w);
    transform:rotate(-90deg);
    position:absolute;
    display:inline-block;
  }

  .circle:before {
      content:""; 
      display:block; 
      width:c(w);
      height:c(w/2); 
      padding:c(circle_w / 2); 
      padding:c(circle_w / 2); 
      padding-bottom:0;
      box-sizing:border-box;
      border-top-left-radius:c(w/2);
      border-top-right-radius:c(w/2);
      background:-webkit-gradient(
          linear,
          left top,
          right top,
          color-stop(0,#fff),
          color-stop(1,#fff)
      ),-webkit-gradient(
          linear,
          left top,
          right top,
          color-stop(0,#077df8),
          color-stop(1,#74baff)
      );
      background-clip:content-box,padding-box;
  }
  .circle:after {
      content:""; 
      display:block;
      width:c(w);
      height:c(w/2);
      padding:c(circle_w / 2); 
      padding-top:0; 
      box-sizing:border-box;
      border-bottom-left-radius:c(w/2);
      border-bottom-right-radius:c(w/2);
      background:-webkit-gradient(
          linear,
          left top,
          right top,
          color-stop(0,#fff),
          color-stop(1,#fff)
      ),-webkit-gradient(
          linear,
          left top,
          right top,
          color-stop(0,#fff),
          color-stop(1,#74baff)
      );
      background-clip:content-box,padding-box;
  }
  .con {
    position:relative;
    top: 0
    display:inline-block;
    height:c(w);
    width:c(w);
  }
  .percent-circle {
    position:absolute;
    height:100%;
    overflow: hidden;
  }
  .percent-circle-right {
    right:c(2);
    width:c(w/2);
    border-radius: 0 c(w/2) c(w/2) 0
  }
  .percent-circle-right .right-content{
    position: absolute;
    content: '';
    width: 100%; 
    height: 100%;
    transform-origin:left center;
    transform: rotate(0deg);
    border-radius: 0 c(w/2) c(w/2) 0
    background:#e1edde;
  }
  .percent-circle-left {
    width:c(w/2);
    border-radius: c(w/2) 0 0 c(w/2)
  }
  .percent-circle-left .left-content {
    position: absolute;
    content: '';
    width: 100%; 
    height: 100%;
    transform-origin:right center;
    transform: rotate(170deg);
    border-radius: c(w/2) 0 0 c(w/2)
    background:#e1edde;
  }
  .text-circle {
    position: absolute;
    display:flex;
    align-items: center;
    justify-content: center;
    height:c(w - circle_w + 2);
    width:c(w - circle_w + 2);
    left:c(circle_w / 2);
    top:c(circle_w / 2);
    border-radius:100%;
    background:#fff;
    color:#000;
  }
  .content{
    display block
    position relative
  }
}
</style>

