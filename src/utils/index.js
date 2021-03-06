import $api from './../api'
import $store from './../store'
import wxApi from './wx-api'
import constant from './constant'
import dealers from './dealer'
function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

/**
 * 全局异常的处理
 * @param {*} error
 */
function catchError (error, dialId) {
  $store.commit('setErrorMsg', {error, dialId})
  console.log('---catchError---')
  console.log(error)
  console.log('---catchError---')
}

async function click (type, callback) {
  // 统计数据
  await $api.setStatics({type})
  callback && callback()
}

export default {
  formatNumber,
  formatTime,
  click, // 点击
  catchError, // 捕获异常
  constant, // 常量
  dealers, // 经销商数据
  wxApi
}
