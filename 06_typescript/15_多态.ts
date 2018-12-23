// 父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的表现
class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  eat () {}
}

class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }
  eat(): string{
    return `${this.name} eat meal`
  }
}

var d = new Dog('hasky')
console.log(d.eat());

class Cat extends Animal {
  constructor(name: string) {
    super(name)
  }
  eat(): string{
    return `${this.name} eat bird`
  }
}

var c = new Cat('mimi')
console.log(c.eat());