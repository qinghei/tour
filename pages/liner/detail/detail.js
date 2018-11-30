// pages/liner/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  book:function(e){
    var xid = e.target.dataset.id;
    this.setData({xid:xid})
    if (e.target.dataset.id!=undefined){
    wx.navigateTo({
      url: 'reserve/reserve?id='+this.data.id+'&xid='+this.data.xid,
    })
    }
  },
  data: {
    id:"",
    list:[],
    xid:""
  },
  getDetail:function(){
    wx.request({
      url: 'http://127.0.0.1:3001/detail',
      data:{id:this.data.id},
      success:(res)=>{
        this.setData({list:res.data})
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ id: options.id})
    this.getDetail();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})