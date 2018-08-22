//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showModal: false,
    testQuestions: [
      {
        id: 1,
        title: '模拟考试题一'
      },
      {
        id: 1,
        title: '模拟考试题二'
      },
      {
        id: 1,
        title: '模拟考试题三'
      },
      {
        id: 1,
        title: '模拟考试题三'
      },
      {
        id: 1,
        title: '模拟考试题三'
      },
      {
        id: 1,
        title: '模拟考试题三'
      },
      {
        id: 1,
        title: '模拟考试题三'
      },
      {
        id: 1,
        title: '模拟考试题三'
      },
      {
        id: 1,
        title: '模拟考试题三'
      },
      {
        id: 1,
        title: '模拟考试题三'
      },
      {
        id: 1,
        title: '模拟考试题三'
      },
      {
        id: 1,
        title: '模拟考试题三'
      },
      {
        id: 1,
        title: '模拟考试题三'
      },
      {
        id: 1,
        title: '模拟考试题三'
      },
      {
        id: 1,
        title: '模拟考试题三'
      },
      {
        id: 1,
        title: '模拟考试题三'
      },
      {
        id: 1,
        title: '模拟考试题三'
      },
      {
        id: 1,
        title: '模拟考试题三'
      }
    ]
  },
  submit: function () {
    this.setData({
      showModal: true
    })
  },
  preventTouchMove: function () {

  },

  go: function () {
    this.setData({
      showModal: false
    })
  },
  //事件处理函数
  // onLoad: function (options) {
  //   this.setData({
  //     testQuestions.id
  //   })
  // },

  // 跳转到测试页面
  goToTestPage: function (event) {
    var id = 1;
    // 跳转事件
    wx.navigateTo({
      url: '../test/test'
    })
  }
})
