// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
function createArray(length: number, value: any): Array<any> {
  let result: Array<any> = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
// console.log(createArray(3, 'x'))

function createArray2<T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
console.log(createArray2<string>(3, 'x'))

// 多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
console.log(swap([7, 'seven']))

// 泛型约束
// function loggingIdentity<T>(arg: T): T {
//   console.log(arg.length); // T 不确定是否有属性length 报错
//   return arg;
// }
interface Lengthwise {
  length: number
}
function loggingIdentity<T extends Lengthwise>(arg: T): T { // T 必须有属性length
  console.log(arg.length);
  return arg;
}

function swap2<T extends U, U>(tuple: [T, U]): [U, T] { // 互相约束
  return [tuple[1], tuple[0]]
}

// 泛型接口
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>
}
let createArray3: CreateArrayFunc
createArray3 = function <T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
console.log(createArray3<string>(3, 'x'))

// 把泛型参数提前到接口名上
interface CreateArrayFunc1<T> {
  (length: number, value: T): Array<T>
}
let createArray4: CreateArrayFunc1<any>
createArray4 = function <T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
console.log(createArray4(3, 'x'))