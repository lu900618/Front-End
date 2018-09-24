// 类实现接口
// 不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces）
interface Alarm {
  alert(): void
}

class Door { }

class SecurityDoor extends Door implements Alarm {
  alert() {
    console.log('SecurityDoor alert')
  }
}

class Car implements Alarm {
  alert() {
    console.log('Car alert');
  }
}

// 一个类可以实现多个接口
interface Light {
  lightOn(): void
  lightOff(): void
}
class NewCar implements Alarm, Light {
  alert() {
    console.log('Car alert')
  }
  lightOn() {
    console.log('Car light on')
  }
  lightOff() {
    console.log('Car light off')
  }
}

// 接口继承接口
interface LightableAlarm extends Alarm {
  lightOn(): void
  lightOff(): void
}

// 接口继承类
class Point {
  x: number
  y: number
}
interface Point3d extends Point {
  z: number
}
let point3d: Point3d = { x: 3, y: 4, z: 5 }


interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { }
  counter.interval = 123
  counter.reset = function () { }
  return counter
}

let c = getCounter()
c(10)
c.reset()
c.interval = 5.0
console.log(c)