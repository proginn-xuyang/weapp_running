import post from './fetch.js'

// 保存OPENID,SESSION_KEY
const login = data => {
  return post(`/os/user/login`, data)
}

const wxAdd = data => {
  return post(`os/user/wx/add`, data)
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

export default {
  login, // 登录
  wxAdd, // 微信用户授权
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
  jiasu // 加速
}
