
<template>
  <div class="com-dial dial-dealer" catchtouchmove="true">
    <div class="com-dial-box disable">
      <div class="header">
        <div>填写信息</div>
      </div>
      <div class="content">
         <div class="input-box">
          <div class="input-title">您的姓名</div>
          <div class="input-content">
            <input type="text"></input>
          </div>
        </div>
        <div class="input-box">
          <div class="input-title">意向车型</div>
          <div class="input-content">
            <picker @change="pickerChange" :value="index" :range="cars">
              <view class="picker">
                {{car}}
              </view>
            </picker>
          </div>
        </div>
         <div class="input-box">
          <div class="input-title">所在城市</div>
          <div class="input-content" @click="showCityPicker">{{address}}</div>
        </div>
         <div class="input-box">
          <div class="input-title">经 销 商</div>
          <div class="input-content">{{dealer}}</div>
        </div>
      </div>
      <div class="btns" @click="clickSubmit">
        <div class="btn">提交</div>
      </div>
      <div class="close" @click="closeDial">
        <img class="btn-close" src="/static/images/btn-close.png" alt srcset mode="aspectFill">
      </div>
    </div>
    <mpvue-city-picker ref="mpvueCityPicker" :pickerValueDefault="pickerValueDefault" @onChange="onChange" @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
  </div>
</template>

<script>
import mpvueCityPicker from 'mpvue-citypicker'

export default {
  data () {
    return {
      index: 0,
      cars: ['科赛', '科尚'],
      car: '请选择车型',
      address: '请选择您的城市',
      dealer: '请选择您的城市',
      pickerValueDefault: [0, 0, 1]
    }
  },
  components: {
    mpvueCityPicker
  },
  created () {
    this.dealer = '云南万友汽车销售服务有限公司第五销售部'
  },
  methods: {
    pickerChange (e) {
      this.index = e.mp.detail.value
      this.car = this.cars[this.index]
    },
    regionChange (e) {
    },
    showCityPicker () {
      this.$refs.mpvueCityPicker.show()
    },
    onChange (e) {
    },
    onCancel (e) {
    },
    onConfirm (e) {
      this.address = e.label
    },
    clickSubmit () {

    },
    closeDial () {
      this.$store.commit('closeDial')
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
  ((x / 2) px)
}
ptl(x, y) {
  left (x / 2) px
  top (y / 2) px
}
cwh(x, y) {
  width x == 0 ? auto : (((((x / 2))))) px
  height (y / 2) px
}
.dial-dealer {
  .content {
    flex-direction column
    font-size c(30)
    text-align center
    padding c(30) c(0)
  }
  .input-box{
    cwh(466, 75)
    margin c(10) c(40)
    background-color: #ffffff;
    border-radius: c(10);
    border: solid c(2) #3fa46f;
    line-height c(75)
    display flex
    justify-content center
    align-items center
    color #3fa36e
    .input-title{
      width c(150)
    }
    .input-content{
      flex 1
      text-align left
      line-height 1.1
    }
  }
}
</style>

