import post from './fetch.js'

// 保存OPENID,SESSION_KEY
const login = data => {
  return post(`/os/user/login`, data)
}

const getUserInfo = data => {
  return post(`/os/user/wx/add`, data)
}

// 获取用户的运动数据
const getWeRunData = data => {
  return post(`/os/step/get`, data)
}

// 获取用户的手机号
const getPhoneNumber = data => {
  return post(`/os/user/phone`, data)
}

// // 获取用户的信息
// const getUserInfo = data => {
//   return post(`${prefix}/GetUserInfo.ashx`, data)
// }

// 统计数据
const setStatics = data => {
  return post(`/os/data/save`, data)
}

// 今日排行榜
const getRankToday = data => {
  return post(`/os/data/rank/today`, data)
}

// 总排行榜
const getRankAll = data => {
  return post(`/os/data/rank`, data)
}

// 获取中奖记录
const getGiftLog = data => {
  return post(`/os/user/receive`, data)
}

// 获取我的步数记录
const getAllStepLogs = data => {
  return post(`/os/step/records`, data)
}

// 获取朋友赠送的步数记录
const getFriendStepLogs = data => {
  return post(`/os/step/giving/today`, data)
}

// 获取好友当日步数
const getFriendStep = data => {
  return post(`/os/step/friend/get`, data)
}

// 赠送步数
const donateStep = data => {
  return post(`/os/step/donation`, data)
}

// 加速
const jiasu = data => {
  return post(`/os/step/speed`, data)
}

// 领取奖品
const getPrize = data => {
  return post(`/os/step/exchange`, data)
}

// 录入信息
const addInfo = data => {
  return post(`/os/user/info/add`, data)
}

// 录入信息
const support = data => {
  return post(`/os/data/praise`, data)
}

// 录入信息
const getMoney = data => {
  return post(`/os/data/redpack`, data)
}

// 获取评论数据
const getComment = data => {
  return post(`/os/data/review/get`, Object.assign({page: 0}, data))
}

// 获取评论数据
const sendComment = data => {
  return post(`/os/data/review/save`, data)
}

export default {
  getComment, // 获取评论数据
  sendComment, // 发送评论数据
  login, // 登录
  getUserInfo, // 微信用户授权
  getWeRunData, // 获取运动数据
  getPhoneNumber, // 获取手机号
  // getUserInfo, // 获取用户的基本信息
  setStatics, // 统计
  getRankToday, // 今日排行榜
  getRankAll, // 总排行榜
  getGiftLog, // 获取中奖记录
  getAllStepLogs, // 获取我的步数记录
  getFriendStepLogs, // 获取朋友赠送的步数记录
  getFriendStep, // 获取好友的步数
  donateStep, // 赠送步数
  jiasu, // 加速
  getPrize, // 领取奖品
  addInfo, // 录入用户信息
  support, // 点赞
  getMoney // 领取红包
}
