

module.exports=function request(params){
  let baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1"
  wx.showLoading({
    title: '加载中',
    mask:true,
  })
  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      url:baseUrl + params.url,
     success:function(res){
      resolve(res.data)
      wx.hideLoading()
     },
     fail:function(err){
      reject(err)
      wx.hideLoading()
     }
    })
  })
}