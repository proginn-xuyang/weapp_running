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
    zhandians: [
      {
        id: 1,
        name: '南滨公园',
        detail: '重庆南滨海棠公园位于南岸区南滨路沿长江一侧，是一个开放式带状公园。公园分成187道路景观、六大主题景区、180景区连接段景观三大部分，园内现有全国最大的浮雕及最长的音乐灯饰。公园以绿色为生命、以文化为灵魂、以灯饰为特色，建成具有历史文化、巴渝文化特色的新型滨江公园。',
        step: 0
      },
      {
        id: 2,
        name: '长江索道',
        detail: '重庆长江索道全长1166米，连通重庆市的渝中区和南岸区，往返于渝中区和南岸区，已经运行30年，被誉为“万里长江第一条空中走廊”和“山城空中公共汽车”。 横跨长江，慢悠悠，晃荡荡，这是解读重庆“立体交通”与“山城外型符号”的最佳方式。',
        step: 2000
      }, {
        id: 3,
        name: '洪崖洞',
        detail: '洪崖洞，原名洪崖门，是古重庆城门之一，位于重庆市渝中区解放碑沧白路，地处长江、嘉陵江两江交汇的滨江地带，是兼具观光旅游、休闲度假等功能的旅游区  。以其巴渝传统建筑和民俗风貌特色而被评为国家AAAA级旅游景区。主要景点由吊脚楼、仿古商业街等景观组成，因形似电影《千与千寻》场景，而成为重庆网红打卡景点。',
        step: 5000
      }, {
        id: 4,
        name: '大剧院',
        detail: '重庆大剧院位于重庆市江北区，是集歌剧、戏剧、音乐会演出，文化艺术交流，多功能为一体的大型社会文化设施。外观呈现“玻璃房子”，晶莹剔透，引人注目；可同时容纳3000多人，正厅和两层楼座的观众都拥有极优的舞台视线，内部音效有很强的实际演出效果，不用话筒就可使全场观众听到完美音效。目前已成功举办了《猫》、《大河之舞》、《歌舞青春》等众多演出。',
        step: 6500
      }, {
        id: 5,
        name: '曾家岩',
        detail: '曾家岩又称“周公馆”，位于渝中区中山四路，是当年中共南方局在市内的一个主要办公地点。1958年它和沙坪坝区红岩村13号中共中央南方局、八路军驻重庆办事处一起被列红岩革命纪念馆的组成部分，1961年成为全国重点文物保护单位。',
        step: 9000
      }, {
        id: 6,
        name: '李子坝',
        detail: '李子坝轻轨站位于嘉陵江畔的李子坝正街39号商住楼6-7层，其实它并非真正意义上的景点，但是因其“空中列车穿楼而过”成为蜚声中外的“网红车站”，吸引了广大有游客前来观光，大多数时候路过都能看到有人拿着手机在驻足拍摄，网红景点名不虚传。',
        step: 10000
      }, {
        id: 7,
        name: '鹅岭二厂',
        detail: '鹅岭二厂是“重庆印制二厂”的简称，民国时期的“中央银行印钞厂”。随着时代的发展，印制二厂逐渐没落，中央银行也只剩旧址。念旧的重庆人民对它进行了改造和重建，在保留原有工业的基础上，增添了新潮的设计元素，改造后的鹅岭二厂充满工业和文艺气息，极具网红特质，吸引了大批美食、手工店、咖啡馆等的入驻，成为了不少摄影者、市民前往观光游览的打卡圣地。',
        step: 13000
      }, {
        id: 8,
        name: '重庆红岩革命纪念馆',
        detail: '红岩革命纪念馆，位于重庆市嘉陵江畔，与红岩村13 号、曾家岩50 号、桂园、《新华日报》旧址毗邻，它们都是抗日战争时期中共中央南方局的活动基地，是我党在国民党统治区巩固和发展抗日民族统一战线、领导人民群众进行革命斗争的中心。因业绩卓著，故设馆加以纪念。',
        step: 16000
      }, {
        id: 9,
        name: '磁器口',
        detail: '位于重庆沙坪坝区，每个城市都有一条主打当地美食的商业街，北京的王府井，成都的宽窄巷子，武汉的户部巷，重庆的磁器口也是这样的存在。磁器口古镇的主路两侧是各种摊贩店铺，人流拥挤嘈杂，也许很难感受到古老重庆的感觉。但深入其中，或转入旁边的小巷中，会探索它清净，古色古香的另一面；除了古老蜿蜒的石板路阶梯，老一辈重庆人真实生活展现在眼前。',
        step: 21000
      }, {
        id: 10,
        name: '石子山体育公园',
        detail: '北部新区中央有一条小山脉，呈东西走向，曲折蜿蜒，起伏平缓，有良好的天然植被，呈现出鲜明的丘陵山地自然风光——这就是照母山。历史对照母山特别偏爱，千百年的时光披沙拣金，在照母山沉淀：南宋状元冯时行曾在此结庐照母，明清时期牌坊在此完整保存，清润甘甜的孝母泉在此流淌。',
        step: 40000
      }, {
        id: 11,
        name: '照母山森林公园',
        detail: '重庆南滨海棠公园位于南岸区南滨路沿长江一侧，是一个开放式带状公园。公园分成187道路景观、六大主题景区、180景区连接段景观三大部分，园内现有全国最大的浮雕及最长的音乐灯饰。公园以绿色为生命、以文化为灵魂、以灯饰为特色，建成具有历史文化、巴渝文化特色的新型滨江公园。',
        step: 0
      },
      {
        id: 12,
        name: '欧尚x-house',
        detail: 'X-House是欧尚汽车新零售模式线下的新型渠道之一，致力于提升欧尚汽车品牌形象，增强品牌溢价能力，具有车辆快保、养护等功能，同时也是品牌体验中心，将全方位打造客户生态圈。',
        step: 42195
      }
    ],
    /**
     * 预览的站点ID
     */
    zhandian_id: -1,
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
    },
    /**
     * 获取站点信息
     */
    zhandian (state) {
      return state.zhandians[state.zhandian_id]
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
     * 打开对应站点ID的对话框
     * @param {*} state
     * @param {*} payload
     */
    openDialZhanDianInfo (state, payload) {
      state.dial_id = 14
      state.zhandian_id = payload - 1
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
