// es5 中的静态方法
function P() {
  this.run = function () { } // 实例方法
}
P.run = function () { } // 静态方法
var p = new P()
p.run() // 调用实例方法
P.run() // 调用静态方法

// 静态方法
class Person {
  name: string
  static sex = 'boy'
  constructor(name: string) {
    this.name = name
  }
  run():void {
    console.log(`${this.name} is running`)
  }
  work():void {
    console.log(`${this.name} is working`)
  }
  static print(): void { // static 静态方法关键字
    console.log(`${Person.sex} is printing`) // 访问静态属性
  }
}

var p1:Person = new Person('zhangsan')
p1.work()
p1.run()
Person.print()