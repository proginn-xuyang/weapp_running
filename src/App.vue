<script>
export default {
  async onShow () {
    var obj = wx.getLaunchOptionsSync()
    let source = '通用入口'
    if (obj.query.source) {
      source = obj.query.source
    }

    var stateStr = wx.getStorageSync('state')
    if (stateStr) {
      var state = JSON.parse(stateStr)
      // state.tab_id = 1
      state.guafens = []
      if (source) {
        state.source = source
      }
      // state.dial_id = 18
      state.game_today_step = 30000
      state.zhandians = [
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
          step: 5000,
          prize_name: ['订制速干运动T恤 500件']
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
          step: 10000,
          prize_name: ['运动蓝牙耳机 300个'],
          left_count: 300
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
          step: 21000,
          prize_name: ['安德玛运动外套 10套']
        }, {
          id: 10,
          name: '石子山体育公园',
          detail: '北部新区中央有一条小山脉，呈东西走向，曲折蜿蜒，起伏平缓，有良好的天然植被，呈现出鲜明的丘陵山地自然风光——这就是照母山。历史对照母山特别偏爱，千百年的时光披沙拣金，在照母山沉淀：南宋状元冯时行曾在此结庐照母，明清时期牌坊在此完整保存，清润甘甜的孝母泉在此流淌。',
          step: 40000
        }, {
          id: 11,
          name: '照母山森林公园',
          detail: '重庆南滨海棠公园位于南岸区南滨路沿长江一侧，是一个开放式带状公园。公园分成187道路景观、六大主题景区、180景区连接段景观三大部分，园内现有全国最大的浮雕及最长的音乐灯饰。公园以绿色为生命、以文化为灵魂、以灯饰为特色，建成具有历史文化、巴渝文化特色的新型滨江公园。',
          step: 41000
        },
        {
          id: 12,
          name: '欧尚x-house',
          detail: 'X-House是欧尚汽车新零售模式线下的新型渠道之一，致力于提升欧尚汽车品牌形象，增强品牌溢价能力，具有车辆快保、养护等功能，同时也是品牌体验中心，将全方位打造客户生态圈。',
          step: 42195,
          prize_name: ['亚瑟士高端跑鞋 5双', '订制荣誉奖牌 200个']
        }
      ]
      this.$store.commit('reset', state)
    }
    await this.$store.dispatch('login')
    await this.$store.dispatch('getWeRunData')

    var now = new Date()
    var year = now.getFullYear()
    var month = now.getMonth()
    var day = now.getDate()
    var tickTime = new Date(year, month, day, 21, 58, 0)

    if (now < tickTime) {
      if (this.$store.state.userinfo.today_step >= 30000) {
        this.$util.catchError('恭喜你获得瓜分每日红包的资格，继续向着站点奖励冲刺吧！')
      } else {
        this.$util.catchError(`亲，你离每日红包还差${30000 - this.$store.state.userinfo.today_step}步，要继续努力呀！`)
      }
    }
  }
}
</script>

<style lang="stylus">
@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

c(x) {
  (((x / 2)) px)
}
ptl(x, y) {
  left (x / 2) px
  top (y / 2) px
}
cwh(x, y) {
  width x == 0 ? auto : (((x / 2))) px
  height (y / 2) px
}
page, container {
  padding 0px
  margin 0px
}
.container {
  width 100%
  height 100%
}

.scroll-view{
  height 100%
}
  
page {
  padding 0px
  margin 0px
  background #025527
  width 100%
  height 100%
}
.abs {
  position absolute
}
.h-center {
  left 0
  right 0
  margin auto
}
.v-center {
  top 0
  bottom 0
  margin auto
}
.logo {
  cwh(455, 33)
  ptl(22, 68)
}
.h-line {
  width 100%
  height c(1)
  border none
  border-bottom c(1) solid #c5c5c5
  transform scaleY(0.5)
  transform-origin 0 0
}

// 对话框模块
.com-dial {
  position fixed
  z-index 100000
  top 0
  bottom 0
  left 0
  right 0
  margin auto
  background rgba(0, 0, 0, 0.8)
  display flex
  justify-content center
  align-items center

  .com-dial-box{
    animation-name: fadeInDown;
    animation-duration: 1s;
    animation-fill-mode: both;
    &.disable{
      animation-name: unset;
    }
  }

  .header {
    cwh(540, 110)
    display flex
    justify-content center
    align-items center
    margin auto
    background-image linear-gradient(90deg, #85f5bc 1%, #3ea26d 100%), linear-gradient(#000000, #000000)
    border-top-left-radius c(20)
    border-top-right-radius c(20)
    font-size c(38)
    font-weight 800
    color #ffffff
  }

  .content {
    width c(540)
    display flex
    justify-content center
    align-items center
    margin c(-1) auto auto auto
    background #ffffff
  }

  .btns {
    cwh(540, 160)
    display flex
    justify-content center
    align-items center
    margin auto
    background #ffffff
    margin c(-1) auto auto auto
    border-bottom-left-radius c(20)
    border-bottom-right-radius c(20)
    .btn {
      cwh(400, 68)
      background-image linear-gradient(
        90deg,
        #ef8b3b 0%,
        #fbd565 100%
      ), linear-gradient(
        90deg,
        #bccbf9 0%,
        #26c1db 100%
      )
      background-blend-mode normal, normal
      border-radius c(34)
      font-size c(26)
      color #ffffff
      line-height c(68)
      text-align center
    }
  }

  .close {
    height c(160)
    display flex
    justify-content center
    align-items center
    .btn-close {
      cwh(71, 71)
    }
  }
}

.com-user {
  flex 1
  display flex
  justify-content flex-start
  align-items center
  .avaster{
    cwh(46,46)
    border-radius c(46 / 2)
  }
  .nickname {
    flex 1
    padding-left c(5)
    font-size c(26)
    color #010101
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    max-width c(150)
  }
}

button::after{
  border:none;
}

input{
  outline:none;
  border:none;
  list-style: none;
}

</style>

