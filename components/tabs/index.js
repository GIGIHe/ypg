// components/tabs/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: []
    },
    // current: {
    //   type: Number,
    //   value: 0
    // }
  },

  /**
   * 组件的初始数据
   */
  data: {
    current:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeItem(e){
     let  {index} = e.currentTarget.dataset
     this.triggerEvent("changeContent",index)
    }
  }
})