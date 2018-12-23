// class Animal {
//   constructor(name) {
//     this.name = name
//   }
//   sayHi() {
//     return `My Name is ${this.name}`
//   }
// }

// let cat = new Animal('cat')

// 类内部的属性和方法
class Animal {
  public name: string // public 可以省略 公有属性
  public constructor(name:string) { // 构造函数 实例化类时触发的方法
    this.name = name
  }
  sayHi(): string {
    return `My Name is ${this.name}`
  }
  getName(): string {
    return this.name
  }
  setName(name: string): void {
    this.name = name
  }
}

var cat = new Animal('Cat')
console.log(cat.getName()) // Cat
cat.setName('Mimi')
console.log(cat.getName()) // Mimi


// 类的继承
class Dog extends Animal {
  constructor(name: string) {
    super(name) // 调用父类的构造函数
  }
}

// 父类的方法和子类的方法一致, 首先在子类中寻找，然后在父类中寻找
class Dog2 extends Animal {
  constructor(name: string) {
    super(name) // 调用父类的构造函数
  }

  sayHi(): string {
    return `My Name is Dog2 --- ${this.name}`
  }
}

var dog = new Dog2('snoopy')
console.log(dog.sayHi()) // My Name is Dog2 --- snoopy
