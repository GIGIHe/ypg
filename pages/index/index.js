//index.js
//获取应用实例
const app = getApp()
const request = require("../../request/index.js")
Page({
  data: {
    swiper:[]
  },
  
  onLoad: function () {
    this.getSwiper()
    this.getCateList()
    this.getFloors()
  // wx.request({
  //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
  //   success:function(res){
  //     _this.setData({
  //       swiper:res.data.message
  //     })
  //   }
  // })
  },
  getSwiper(){
    let _this = this
    request({ url: "/home/swiperdata" }).then(res=>{
      _this.setData({
        swiper:res.message
      })
    })
  },
  // 获取导航
  getCateList(){
    request({url:"/home/catitems"}).then(res=>{
      if(res.meta.status===200){
        this.setData({
          catesList:res.message
        })
      }
    })
  },
  //获取楼层
  getFloors(){
    request({url:"/home/floordata"}).then(res=>{
      if(res.meta.status===200){
        this.setData({
          floorsList:res.message
        })
      }
    })
  },
  navigate(e){
    let query = e.currentTarget.dataset['query'].split("?")[1]
    wx.navigateTo({
      url: `/pages/goods_list/index?${query}`,
    })
  }
})
