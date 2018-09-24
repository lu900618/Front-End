interface Person {
  name: string
  age: number
}

let tom: Person = { name: 'zhangsan', age: 28 }

interface Person1 {
  name: string
  age?: number // 可选属性
}

let lilei: Person1 = { name: 'lilei' }
let hanmeimei: Person1 = { name: 'hanmeimei', age: 31 }

interface Person2 {
  readonly name: string // 只读属性
  age?: number
  [propName: string]: any
}

let Lucy: Person2 = { name: 'Lucy', gender: 'female' }