// class Animal {
//   constructor(name) {
//     this.name = name
//   }
//   sayHi() {
//     return `My Name is ${this.name}`
//   }
// }

// let cat = new Animal('cat')

class Animal {
  public name: string
  public constructor(name:string) {
    this.name = name
  }
  sayHi(): string  {
    return `My Name is ${this.name}`
  }
}