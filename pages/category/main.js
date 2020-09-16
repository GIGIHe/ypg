// pages/search/index.js
const request = require("../../request/index.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCurrent: 0,
    scrollTop:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },
  async getData() {
    let res = await request({
      url: "/categories"
    })
    if (res.meta.status === 200) {
      wx.setStorageSync('catesData', res.message)
      let leftMenu = res.message.map(item => item.cat_name)
      let rightContent = res.message[0].children
      this.setData({
        leftMenu,
        rightContent
      })
    }
  },
  hanldeItemTap(e){
    let index = e.currentTarget.dataset.index
    let cates = wx.getStorageSync('catesData')
    this.setData({
      rightContent:cates[index].children,
      isCurrent:index,
      scrollTop:0
    })
  }
})