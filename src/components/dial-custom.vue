<template>
  <div class="dial-custom">
    <dial-auth v-if="state.dial_id <= 0 && state.userinfo.can_auth_werundata"></dial-auth>
    <dial-auth-userinfo v-if="state.dial_id <= 0 && !state.userinfo.can_auth_werundata && !state.userinfo.user"></dial-auth-userinfo>
    <!-- <dial-auth-telephone v-if="state.dial_id <= 0 &&  !state.userinfo.can_auth_werundata  && state.userinfo.user && !state.userinfo.phone"></dial-auth-telephone> -->
    <dial-gift-money v-if="state.dial_id <= 0 && state.userinfo.phone && state.userinfo.user && getters.guafen && getters.guafen.tips === 0"></dial-gift-money>
    <dial-adduserinfo-tip-error v-if="state.dial_id <= 0 && state.userinfo.phone && state.userinfo.user && getters.guafen && getters.guafen.tips === 2"></dial-adduserinfo-tip-error>
    <dial-mid-pointer v-if="state.dial_id <= 0 && getters.mid_pointer"></dial-mid-pointer>
    <dial-end-pointer v-if="state.dial_id <= 0 && getters.end_pointer"></dial-end-pointer>
  </div>
</template>

<script>
import DialAuth from './dial-auth'
import DialAuthUserinfo from './dial-auth-userinfo'
import DialAuthTelephone from './dial-auth-telephone'
import DialGiftMoney from './dial-gift-money'
import DialAdduserinfoTipError from './dial-adduserinfo-tip-error'
import DialMidPointer from './dial-mid-pointer'
import DialEndPointer from './dial-end-pointer'
export default {
  components: {
    DialAuth,
    DialAuthUserinfo,
    DialAuthTelephone,
    DialGiftMoney,
    DialMidPointer, // 中间站点
    DialEndPointer, // 终点
    DialAdduserinfoTipError
  },
  computed: {
    state () {
      return this.$store.state
    },
    getters () {
      return this.$store.getters
    }
  }
}
</script>

