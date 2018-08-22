// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log('onLoad');
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b1cbb3d41e3435437657d1d/example/mock',
      header: {
        'content-type': 'application/json'
      },
      // 请求后台数据成功
      success: function(res) {
        console.log(res);
        console.log('返回的code' + res.data.data.projects[1].number);
        console.log('返回的id' + res.data.data.projects[1].address);
        that.setData({
          motto: '后台返回code：' + res.data.data.projects[1].number + '\n后台返回的message：' + res.data.data.projects[1].address
        })
      }
    })
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