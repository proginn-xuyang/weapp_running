<template>
  <div class="dial-all">
    <!-- 步数明细 -->
    <dial-step-log v-if="state.dial_id===1"></dial-step-log>

    <!-- 好友赠送 -->
    <dial-friend-step-log v-if="state.dial_id===2"></dial-friend-step-log>

    <!-- 现金奖励 -->
    <dial-gift-money v-if="state.dial_id===3"></dial-gift-money>

    <!-- 到达终点 -->
    <dial-end-pointer v-if="state.dial_id===4"></dial-end-pointer>

    <!-- 到达中点（其他站点） -->
    <dial-mid-pointer v-if="state.dial_id===5"></dial-mid-pointer>

    <!-- 放弃站点奖励 -->
    <dial-give-up v-if="state.dial_id===6"></dial-give-up>

    <!-- 确认奖励 -->
    <dial-comfirm v-if="state.dial_id===7"></dial-comfirm>

    <!-- 加速成功 -->
    <dial-jiasu-success v-if="state.dial_id===8"></dial-jiasu-success>
    
    <!-- 加速失败 -->
    <dial-jiasu-failed v-if="state.dial_id===9"></dial-jiasu-failed>

    <!-- 赠送成功 -->
    <dial-donate-success v-if="state.dial_id===10"></dial-donate-success>

    <!-- 赠送失败 -->
    <dial-donate-failed v-if="state.dial_id===11"></dial-donate-failed>

    <!-- 规则 -->
    <dial-rule v-if="state.dial_id===12"></dial-rule>

    <!-- 授权获取步数  -->
    <dial-auth v-if="state.dial_id===13"></dial-auth>
  </div>
</template>

<script>
import DialStepLog from './dial-step-log' // 1
import DialFriendStepLog from './dial-friend-step-log' // 2
import DialGiftMoney from './dial-gift-money' // 3
import DialMidPointer from './dial-mid-pointer' // 4
import DialEndPointer from './dial-end-pointer' //  5
import DialGiveUp from './dial-give-up' // 6
import DialComfirm from './dial-comfirm' // 7
import DialJiasuSuccess from './dial-jiasu-success' // 8
import DialJiasuFailed from './dial-jiasu-failed' // 9
import DialDonateSuccess from './dial-donate-success' // 10
import DialDonateFailed from './dial-donate-failed' // 11
import DialRule from './dial-rule' // 12
import DialAuth from './dial-auth' // 13
export default {
  components: {
    DialStepLog, // 步数明细 1
    DialFriendStepLog, // 好友赠送 2
    DialGiftMoney, // 现金奖励 3
    DialMidPointer, // 到达终点 4
    DialEndPointer, // 到达中点（其他站点） 5
    DialGiveUp, // 放弃站点奖励 6
    DialComfirm, // 确认奖励 7
    DialJiasuSuccess, // 加速成功 8
    DialJiasuFailed, // 加速失败 9
    DialDonateSuccess, // 赠送成功 10
    DialDonateFailed, // 赠送失败 11
    DialRule, // 规则 12
    DialAuth // 授权获取步数 13
  },
  computed: {
    state () {
      return this.$store.state
    }
  }
}
</script>

