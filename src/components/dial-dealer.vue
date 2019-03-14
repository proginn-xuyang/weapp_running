
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
            <input type="text" v-model="username" placeholder="请输入您的姓名" placeholder-style="color:#3fa46f;"></input>
          </div>
        </div>
        <div class="input-box">
          <div class="input-title">意向车型</div>
          <div class="input-content">
            <picker @change="pickerCarChange" :range="cars">
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
          <div class="input-content">
             <picker @change="pickerDealerChange" :range="dealers" range-key="dealerName">
              <view class="picker">
                {{dealer_name}}
              </view>
            </picker>
          </div>
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
      province: '',
      city: '',
      username: '',
      dealer_id: '',
      dealer_name: '请选择经销商',
      pickerValueDefault: [0, 0, 1]
    }
  },
  components: {
    mpvueCityPicker
  },
  created () {
    this.dealer = '请选择经销商'
  },
  methods: {
    pickerCarChange (e) {
      this.car = this.cars[e.mp.detail.value]
    },
    pickerDealerChange (e) {
      if (!this.dealers) {
        this.dealer_id = ''
        this.dealer_name = '请选择经销商'
        return
      }
      this.dealer_id = this.dealers[e.mp.detail.value].dealerId
      this.dealer_name = this.dealers[e.mp.detail.value].dealerName
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
      var items = e.label.split('-')
      if (items[1] === '市辖区' || items[1] === '县') {
        this.province = items[0]
        this.city = ''
      } else {
        this.province = items[0]
        this.city = items[1]
      }
    },

    async clickSubmit () {
      var postData = {
        username: this.username,
        car_model: this.car,
        province: this.province,
        city: this.city,
        address: this.address,
        dealer_code: this.dealer_id,
        dealer_name: this.dealer_name
      }

      if (!postData.username) {
        this.$util.catchError('请输入您的姓名', 19)
        return
      }
      if (postData.car_model === '请选择车型') {
        this.$util.catchError('请选择车型', 19)
        return
      }
      if (postData.address === '请选择您的城市') {
        this.$util.catchError('请选择您的城市', 19)
        return
      }
      if (postData.dealer_name === '请选择经销商') {
        this.$util.catchError('请选择经销商', 19)
        return
      }

      if (!postData.city) {
        postData.city = postData.province
      }

      var result = await this.$api.addInfo(postData)
      if (result.err_code === 0 || result.err_code === '0') {
        // this.$util.catchError('信息录入成功')
        this.$store.commit('closeNoGiftMoney')
      } else {
        this.$util.catchError(result.err_msg)
      }
    },
    closeDial () {
      this.$store.commit('closeNoGiftMoney')
    }
  },
  computed: {
    state () {
      return this.$store.state
    },
    dealers () {
      if (!this.province) return this.$util.dealers
      var tmps = []
      for (var d of this.$util.dealers) {
        if ((this.province.indexOf(d.province) >= 0) && (!this.city || (this.city.indexOf(d.city) >= 0))) {
          tmps.push(d)
        }
      }
      return tmps
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

