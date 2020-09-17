// pages/goods_list/index.js
const request = require("../../request/index.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        name:"综合",
       isActive:true
      },
      {
        name:"销量",
        isActive:false
      },
      {
        name:"价格",
        isActive:false
      }
    ],
    listData:[],
    isMore:false
  },
  QueryParams:{
    query:"",
    cid:'',
    pagenum:1,
    pagesize:10
  },
  total:1,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.QueryParams.cid = options.cat_id
    this.getInitData()
  },
  // 商品列表
  getInitData() {
     request({url:"/goods/search",data:this.QueryParams}).then(res=>{
       let datas = this.data.listData
       this.total = Math.ceil(res.message.total/this.QueryParams.pagesize)
       this.setData({
         listData:datas.concat(res.message.goods),
       })
     })
  },
  handleEvent(e){
    console.log(e.detail)
    let index = e.detail
    let {tabs} = this.data
    tabs.forEach((v,inx)=>index===inx?v.isActive=true:v.isActive=false)
    this.setData({
      tabs
    })
  },
    /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 加载更多商品列表
    // 和之前数据连接 concat
    this.QueryParams.pagenum++
    if(this.total>=this.QueryParams.pagenum){
      this.getInitData()
    }else{
      wx.showToast({
        title: '没有更多数据'
      })
    }
},




})