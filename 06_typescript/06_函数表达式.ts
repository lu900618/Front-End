function sum(x: number, y: number): number {
  return x + y
}

let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y
}

interface searchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: searchFunc
mySearch = function (source: string, subString: string): boolean {
  return source.search(subString) !== -1
}

// 可选参数
function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return firstName + lastName
  } else {
    return firstName
  }
}

// 参数默认值
function buildName2(firstName: string, lastName: string = 'Cat'): string {
  return firstName + lastName
}

// 剩余参数
function push(arr: any[], ...items: any[]) {
  items.forEach(item => {
    arr.push(item)
  });
}

let a = []
push(a, 1, 2, 3, 4)
console.log(a)

// 重载
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else {
    return x.split('').reverse().join('')
  }
}