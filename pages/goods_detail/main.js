// pages/goods_detail/index.js
const request = require("../../request/index.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCollect:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow:function(){
    const page = getCurrentPages()
    // page[page.length-1]当前页面
    let {goods_id} = page[page.length-1].options
    this.getGoodsData(goods_id)
  },
  async getGoodsData(goods_id) {
    let res = await request({
      url: "/goods/detail",
      data: {
        goods_id: goods_id
      }
    })
    if (res.meta.status === 200) {
      this.setData({
        goodsData: res.message,
      })
    }
  },
  imagePreview(e){
    let cur = e.currentTarget.dataset.cur
    let urlObj = this.data.goodsData.pics
   let urlArr = urlObj.map(v=>v.pics_mid)
    wx.previewImage({
      current:cur,
      urls:urlArr,
    })
  }
})