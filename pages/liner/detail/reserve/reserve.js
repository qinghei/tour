// pages/reserve/reserve.js
const date = new Date()
const years = []
const months = []
const days = []
//获取年
for (let i = 2018; i <= date.getFullYear() + 5; i++) {
  years.push("" + i);
}
//获取月份
for (let i = 1; i <= 12; i++) {
  if (i < 10) {
    i = "0" + i;
  }
  months.push("" + i);
}
//获取日期
for (let i = 1; i <= 31; i++) {
  if (i < 10) {
    i = "0" + i;
  }
  days.push("" + i);
}
Page({
  /**点击加号 */
  add: function () {
    var num = this.data.num;
    num++;
    var state = num > 1 ? 'normal' : 'disable';
    this.setData({
      num: num,
      state: state
    })
   
      if (this.data.xid == 1) {
        var price = Number(this.data.price1)
        var num = Number(this.data.num)
        console.log(num)
        var total = price * num;
        console.log(total)
        this.setData({total:total})
      }
      if (this.data.xid == 2) {
        var price = Number(this.data.price2)
        var num = Number(this.data.num)
        console.log(num)
        var total = price * num;
        console.log(total)
        this.setData({ total: total })
      }
    
    //console.log(num)
  },
  /*点击减号*/
  incream: function () {
    var num = this.data.num;
    if (num > 1) {
      num--;
    }
    var state = num > 1 ? 'normal' : 'disable';
    this.setData({
      num: num,
      state: state
    })
    if (this.data.xid == 1) {
      var price = Number(this.data.price1)
      var num = Number(this.data.num)
      var total = price * num;
      this.setData({ total: total })
    }
    if (this.data.xid == 2) {
      var price = Number(this.data.price2)
      var num = Number(this.data.num)
      var total = price * num;
      this.setData({ total: total })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    num:1,
    id:"",
    xid:"", 
    time: '',  //日期选择器
    multiArray: [years, months, days],
    multiIndex: [0, 9, 16, 10, 17],
    choose_year: '',
    price1:"",
    price2:"",
    total: "",
    info:"",
    info2:""
  },
 info:function(e){
    var rr=e.detail.value;
    this.setData({info:rr})
 },
  info2: function (e) {
    var dd = e.detail.value;
    this.setData({ info2: dd })
  },
 pay: function () {
    // console.log(this.data.num,this.data.xid)
    // console.log(this.data.num)
    // console.log(this.data.list[0].price1)
    // if(this.data.xid==1){
    //   var price = Number(this.data.list[0].price1)
    //   var num = Number(this.data.num)
    //   console.log(num)
    //   var total=price*num;
    //   console.log(total)
    // }
    wx.navigateTo({
      url: 'orderdetail/orderdetail?id=' + this.data.id+'&time='+this.data.time+'&total='+this.data.total+'&num='+this.data.num+'&info='+this.data.info+'&info2='+this.data.info2,
      //data:{id:this.data.id}
    })
},
  getOrder:function(){
    wx.request({
      url: 'http://127.0.0.1:3001/detail',
      data: { id: this.data.id },
      success: (res) => {
        this.setData({ list: res.data,price1:res.data[0].price1,price2: res.data[0].price2})
        if(this.data.xid==1){
          this.setData({total:res.data[0].price1})
        }
        if (this.data.xid == 2){
          this.setData({ total: res.data[0].price2 })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var id = options.id;
      this.setData({
        id:id,
        xid: options.xid
      })
      this.getOrder()
      //设置默认的年份
      this.setData({
        choose_year: this.data.multiArray[0][0]
      })   
  },
  //获取时间日期
  bindMultiPickerChange: function (e) {
    this.setData({
      multiIndex: e.detail.value
    })
    const index = this.data.multiIndex;
    const year = this.data.multiArray[0][index[0]];
    const month = this.data.multiArray[1][index[1]];
    const day = this.data.multiArray[2][index[2]];
    this.setData({
      time: year + '-' + month + '-' + day 
    })
  },
  //监听picker的滚动事件
  bindMultiPickerColumnChange: function (e) {
    //获取年份
    if (e.detail.column == 0) {
      let choose_year = this.data.multiArray[e.detail.column][e.detail.value];
      this.setData({
        choose_year
      })
    }
    if (e.detail.column == 1) {
      let num = parseInt(this.data.multiArray[e.detail.column][e.detail.value]);
      let temp = [];
      if (num == 1 || num == 3 || num == 5 || num == 7 || num == 8 || num == 10 || num == 12) { //判断31天的月份
        for (let i = 1; i <= 31; i++) {
          if (i < 10) {
            i = "0" + i;
          }
          temp.push("" + i);
        }
        this.setData({
          ['multiArray[2]']: temp
        });
      } else if (num == 4 || num == 6 || num == 9 || num == 11) { //判断30天的月份
        for (let i = 1; i <= 30; i++) {
          if (i < 10) {
            i = "0" + i;
          }
          temp.push("" + i);
        }
        this.setData({
          ['multiArray[2]']: temp
        });
      } else if (num == 2) { //判断2月份天数
        let year = parseInt(this.data.choose_year);
        if (((year % 400 == 0) || (year % 100 != 0)) && (year % 4 == 0)) {
          for (let i = 1; i <= 29; i++) {
            if (i < 10) {
              i = "0" + i;
            }
            temp.push("" + i);
          }
          this.setData({
            ['multiArray[2]']: temp
          });
        } else {
          for (let i = 1; i <= 28; i++) {
            if (i < 10) {
              i = "0" + i;
            }
            temp.push("" + i);
          }
          this.setData({
            ['multiArray[2]']: temp
          });
        }
      }
    }
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    this.setData(data);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady:function () {

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