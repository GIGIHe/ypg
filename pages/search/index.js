// pages/search/index.js
const request = require("../../request/index.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFocus: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  changeValue(e) {
    let query = e.detail.value
    console.log(query)
  }
})