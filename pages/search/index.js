// pages/search/index.js
const request = require("../../request/index.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.getData()
  },
  getData(){
    request({url:"/categories"}).then(res=>{
      if(res.status===200){
       this.setData({
        cates:res.message
       })
      }
    })
  }
})