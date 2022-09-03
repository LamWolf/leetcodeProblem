export default class Watcher {
    vm;
    getter;
    value;
    cb;
  
    constructor (
      vm,
      exp
    ) {
      this.vm = vm
      this.cb = cb
      // 获取表达式对应的属性的 getter
      this.getter = parsePath(exp)
      this.value = this.get()
    }
  
    /**
     * 获取最新的值
     **/
    get () {
      // 将 Dep 的当前订阅者指向当前 watcher
      Dep.target = this
      let value
      const vm = this.vm
      // 获取对应属性值
      value = this.getter.call(vm, vm)
      // 清空 Dep 当前订阅者
      Dep.target = null
      return value
    }
  
    /**
     * 订阅
     **/
    addDep (dep) {
      // 将当前 watcher 添加到 Dep 的订阅者列表中
      dep.addSub(this)
    }
  
    /**
     * 更新视图
     **/
    update () {
      const value = this.get()
      const oldValue = this.value
      // 调用 callback 更新视图
      this.cb.call(this.vm, value, oldValue)
    }
  }