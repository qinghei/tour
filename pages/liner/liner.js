// pages/liner/liner.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    liner:[],
    content: [
      ["不限", "2018-11", "2018-12", "2019-01","2019-02","2019-03","2019-04"],
      ["不限", "维多利亚号", "长乐公主号", "海洋灿烂号", "美国公主盛世公主号", "丽星邮轮处女星号", "歌诗达邮轮维多利亚号", "塞洛斯邮轮涅斐勒号", "维京游轮奥丁号"],
      ["全部", "鲁教版", "浙教版", "沪科版", "北师大版", "仁爱版", "沪粤版", "外研版", "冀教版", "湘教版", "苏教版", "可粤版", "教科版", "华东师大版", "人教版"]],
    currentTab: -1,
    id:"",
  
  },
  //导航栏部分
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.id
    })
  },
  //产品内容循环
  getImageList: function () {
    wx.request({
      url: 'http://127.0.0.1:3001/liner',
      success: (res) => {
       //console.log(res)
        this.setData({ liner: res.data });
      }
    })
  },
  /** 跳转至详情*/
  jumpDetail:function(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'detail/detail?id='+id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getImageList();
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