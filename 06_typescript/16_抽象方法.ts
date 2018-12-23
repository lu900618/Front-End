// 提供其他类继承的基类，不能直接被实例化
// 用abstract关键字定义抽象类和抽象方法
// 抽象类中的抽象方法不包含具体的实现并且必须在派生类中实现
// 抽象方法只能在抽象类中

// 抽象类和抽象方法用来定义方法

abstract class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  abstract eat(): string
}

class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }
  eat():string {
    return `${this.name} is eating`
  }
}

var d = new Dog('hasky')
console.log(d.eat());
