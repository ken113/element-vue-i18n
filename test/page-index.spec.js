var Vue = require('vue')
var ComponentIndex = require('./../src/pages/index.vue')

describe('test index.vue', function () {

  // JavaScript 选项断言
  it('should have correct message', function () {
    expect(ComponentIndex.data().msg).toBe('1111')
  })

  // 组件实际渲染的渲染结果断言
 /* it('should render correct message', function () {
    var vm = new Vue({
      template: '<div><test></test></div>',
      components: {
        'test': ComponentIndex
      }
    }).$mount()
    expect(vm.$el.querySelector('h2.red').textContent).toBe('Hello from Component index!')
  })*/
  
})