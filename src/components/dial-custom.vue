<template>
  <div class="dial-custom">
    <dial-auth v-if="state.dial_id <= 0 && state.userinfo.can_auth_werundata"></dial-auth>
    <dial-auth-userinfo v-if="state.dial_id <= 0 && !state.userinfo.can_auth_werundata && !state.userinfo.user"></dial-auth-userinfo>
    <dial-auth-telephone v-if="state.dial_id <= 0 &&  !state.userinfo.can_auth_werundata  && state.userinfo.user && !state.userinfo.phone"></dial-auth-telephone>
    <dial-gift-money v-if="state.dial_id <= 0 && state.userinfo.phone && state.userinfo.user && !getters.guafen.tips"></dial-gift-money>
    <dial-mid-pointer v-if="state.dial_id <= 0 && getters.mid_pointer"></dial-mid-pointer>
  </div>
</template>

<script>
import DialAuth from './dial-auth'
import DialAuthUserinfo from './dial-auth-userinfo'
import DialAuthTelephone from './dial-auth-telephone'
import DialGiftMoney from './dial-gift-money'
import DialMidPointer from './dial-mid-pointer'
export default {
  components: {
    DialAuth,
    DialAuthUserinfo,
    DialAuthTelephone,
    DialGiftMoney,
    DialMidPointer
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

