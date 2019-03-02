import Vue from 'vue'
import Vuex from 'vuex'
import $util from './../utils'
import $api from './../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    /**
     * 每天目标步数
     */
    target_step: 30000,
    /**
     *  显示的对话框ID
     */
    dial_id: 0,
    /**
     * tab
     */
    tab_id: 1,
    /**
     * 用户信息
     */
    userinfo: {
      token: '',
      openid: '',
      today_step: 0, // 当前的步数
      total_step: 0, // 总的部署

      can_auth_werundata: 1, // 是否授权获取步数 0 否 1 是
      can_gufen: 0,

      user: 0, // 是否已添加用户微信信息 0 否 1 是
      phone: 0, // 是否已获取手机号 0 否 1 是

      nickname: '草摩雨大战咸蛋超人',
      avaster: '/static/images/header.png'
    },
    friend_userinfo: {
      openid: '',
      today_step: '...',
      total_step: '...',
      avasterUrl: '',
      nickName: '欧尚铁粉'
    },
    // 排行榜类型
    rank_type: 0,
    /**
     * 当天排行榜
     */
    rank_today: [],
    /**
     * 当天排行榜榜最近一次获取时间
     */
    rank_today_last_time: 0,
    /**
     * 总排行榜
     */
    rank_all: [],
    /**
     * 总排行榜最近一次获取时间
     */
    rank_all_last_time: 0,
    /**
     * 奖品列表
     */
    gift_logs: [],
    /**
     * 所有步数记录
     */
    all_step_logs: [],
    /**
     * 朋友赠送步数记录
     */
    friend_step_logs: [],
    /**
     * 站点信息
     */
    sites: [
    ],
    /**
     * 每天的瓜分数据
     */
    guafen: {
      is_has_prize: 0, // 是否获得奖品
      money: 1.98, // 奖金额度
      time: '2019-3-2' // 获奖时间
    },
    /**
     * 终点
     */
    end_pointer: {
      is_has_prize: 1, // 0表示没有奖品，1表示有奖品
      rank: 1, // 终点排名
      pointer_name: '终点站', // 站点名称
      gift_name: '欧尚车模', // 获得奖品的名称
      is_get_prize: 0 // 0表示没有领取奖品，1表示已经领取奖品
    },
    /**
     * 站点
     */
    mid_pointer: {
      is_has_prize: 0, // 0表示没有奖品，1表示有奖品
      rank: 123, // 到达本站的名次
      pointer_name: '江北石子山体育公园站', // 站点名称
      gift_name: '2.88元红包', // 本站奖品
      next_pointer_gift_name: '欧尚车模',
      free_step: 100 // 放弃本站奖品获得的步数
    },
    /**
     * 需要依次打开的对话框
     */
    dials: []
  },
  getters: {
    /**
     * 排行榜的类型
     * @param {*} state
     */
    rank_type (state) {
      if (state.rank_type === 0) {
        return '今日排行榜'
      } else {
        return '里程排行榜'
      }
    },
    /**
     * 排行榜数据
     * @param {*} state
     */
    ranks (state) {
      if (state.rank_type === 0) {
        return state.rank_today
      } else {
        return state.rank_all
      }
    },
    /**
     * 今日剩余步数
     * @param {*} state
     */
    left_step (state) {
      return state.target_step - state.userinfo.today_step
    },
    /**
     * 好友剩余步数
     * @param {*} state
     */
    friend_left_step (state) {
      if (state.friend_userinfo.today_step === '...') {
        return '...'
      } else {
        return state.target_step - state.friend_userinfo.today_step
      }
    }
  },
  mutations: {
    /**
     * 关闭对话框
     * @param {*} state
     */
    closeDial (state) {
      state.dial_id = 0
    },
    /**
     * 打开对应ID的对话框
     * @param {*} state
     * @param {*} payload
     */
    openDial (state, payload) {
      state.dial_id = payload
    },
    /**
     * 设置用户信息
     * @param {*} state
     * @param {*} payload
     */
    setUserinfo (state, payload) {
      state.userinfo = Object.assign(state.userinfo, payload)
      wx.setStorageSync('state', JSON.stringify(state))
    },
    /**
     * 设置今日排行榜
     * @param {*} state
     * @param {*} payload
     */
    setRankToday (state, payload) {
      state.rank_today = payload
      state.rank_today_last_time = Date.now()
      wx.setStorageSync('state', JSON.stringify(state))
    },
    /**
     * 设置总排行榜
     * @param {*} state
     * @param {*} payload
     */
    setRankAll (state, payload) {
      state.rank_all = payload
      state.rank_all_last_time = Date.now()
      wx.setStorageSync('state', JSON.stringify(state))
    },
    /**
     * 更改排行榜的类型
     * @param {*} state
     */
    toggleRankType (state) {
      state.rank_type ^= 1
      this.dispatch('getRank')
    },
    /**
     * 设置奖品
     * @param {*} state
     */
    setGiftLog (state, payload) {
      state.gift_logs = payload
      wx.setStorageSync('state', JSON.stringify(state))
    },
    /**
     * 设置朋友助力的步数
     * @param {*} state
     */
    setFriendStepLogs (state, payload) {
      state.friend_step_logs = payload
      wx.setStorageSync('state', JSON.stringify(state))
    },
    /**
     * 设置所有的步数记录
     * @param {*} state
     */
    setAllStepLogs (state, payload) {
      state.all_step_logs = payload
      wx.setStorageSync('state', JSON.stringify(state))
    },
    /**
     * 设置捐赠步数
     * @param {*} state
     * @param {*} payload
     */
    setDonateStep (state, payload) {
      state.userinfo.today_step -= payload
      wx.setStorageSync('state', JSON.stringify(state))
    },
    /**
     * 设置好友的信息
     * @param {*} state
     * @param {*} payload
     */
    setFriendUserinfo (state, payload) {
      state.friend_userinfo = Object.assign(state.friend_userinfo, payload)
      wx.setStorageSync('state', JSON.stringify(state))
    },
    /**
     * 清空好友的信息
     * @param {*} state
     */
    clearFriendUserinfo (state) {
      state.friend_userinfo.nickName = '欧尚铁粉'
      state.friend_userinfo.avasterUrl = 'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIV8NmLonFjTsMrSPbw3uV6SkcMibuVPUyW8T6RmX9hYGg4TA78FfYHbp44Fyben2nqe9jpRDeZrFg/64'
      state.friend_userinfo.today_step = '...'
      state.friend_userinfo.total_step = '...'
    },
    setTabId (state, payload) {
      state.tab_id = payload
      if (state.tab_id === 1) {
        wx.redirectTo({url: `/pages/index/main?t=${Date.now()}`})
      } else if (state.tab_id === 2) {
        wx.redirectTo({url: `/pages/gift/main?t=${Date.now()}`})
      } else if (state.tab_id === 3) {
        wx.redirectTo({url: `/pages/rank/main?t=${Date.now()}`})
      }
    }
  },
  actions: {
    /**
     * JSCODE登录
     * @param {*} store
     */
    async login (store) {
      try {
        var code = await $util.wxApi.login()
        var result = await $api.login({ code })
        if (result.err_code === 0 || result.err_code === '0') {
          this.commit('setUserinfo', result)
        } else {
          $util.catchError('登录失败')
        }
      } catch (error) {
        console.log(error)
        $util.catchError(error)
      }
    },
    /**
     * 获取手机号
     * @param {*} store
     * @param {*} payload
     */
    async getPhoneNumber (store, payload) {
      try {
        var result = await $api.getPhoneNumber({
          encryptedData: payload.mp.detail.encryptedData,
          iv: payload.mp.detail.iv
        })

        if (result.err_code === 0 || result.err_code === '0') {
          this.commit('setUserinfo', { phone: 1 })
        } else {
          $util.catchError('手机号获取失败')
        }
      } catch (error) {
        $util.catchError(error)
      }
    },

    /**
     * 获取运动步数
     * @param {*} store
     */
    async getWeRunData (store) {
      try {
        var runData = await $util.wxApi.getWeRunData()
        var result = await $api.getWeRunData(runData)
        if (result.err_code === 0 || result.err_code === '0') {
          this.commit('setUserinfo', {
            today_step: result.today_step,
            total_step: result.total_step,
            can_auth_werundata: 0
          })
        } else {
          $util.catchError('获取步数失败')
        }
      } catch (error) {
        this.commit('setUserinfo', {
          can_auth_werundata: 1
        })
      }
    },
    /**
     * 加速
     * @param {*} store
     */
    async jiasu (store) {

    },
    /**
     * 获取排行榜
     * @param {*} store
     */
    async getRank (store) {
      var result
      if (store.state.rank_type === 0) {
        result = await $api.getRankToday()
        if (result.err_code === 0 || result.err_code === '0') {
          this.commit('setRankToday', result.data)
        } else {
          $util.catchError('获取今日排行榜失败')
        }
      } else {
        result = await $api.getRankAll()
        if (result.err_code === 0 || result.err_code === '0') {
          this.commit('setRankAll', result.data)
        } else {
          $util.catchError('获取总排行榜失败')
        }
      }
    },
    /**
     * 获取奖品记录
     * @param {*} store
     */
    async getGiftLog (store) {
      let result = await $api.getGiftLog()
      if (result.err_code === 0 || result.err_code === '0') {
        this.commit('setGiftLog', result.data)
      } else {
        $util.catchError('获取中奖记录失败')
      }
    },
    /**
     * 获取我的步数记录
     * @param {*} store
     */
    async getAllStepLogs (store) {
      let result = await $api.getAllStepLogs()
      if (result.err_code === 0 || result.err_code === '0') {
        this.commit('setAllStepLogs', result.data)
      } else {
        $util.catchError('获取步数记录失败')
      }
    },
    /**
     * 获取朋友赠送的步数记录
     * @param {*} store
     */
    async getFriendStepLogs (store) {
      let result = await $api.getFriendStepLogs()
      if (result.err_code === 0 || result.err_code === '0') {
        this.commit('setFriendStepLogs', result.data)
      } else {
        $util.catchError('获取好友赠送记录失败')
      }
    },

    /**
     * 赠送步数
     * @param {*} store
     */
    async donateStep (store, payload) {
      let result = await $api.donateStep(payload)
      if (result.err_code === 0 || result.err_code === '0') {
        this.commit('setDonateStep', payload.step)
      } else {
        $util.catchError('赠送步数失败')
      }
    },

    /**
     * 获取好友信息
     * @param {*} store
     */
    async getFriendUserinfo (store, payload) {
      console.log(2)
      this.commit('clearFriendUserinfo')
      let result = await $api.getFriendStep(payload)
      console.log(result)
      if (result.err_code === 0 || result.err_code === '0') {
        this.commit('setFriendUserinfo', result)
      } else {
        $util.catchError('获取好友信息失败')
      }
    }

  }
})

export default store
