enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat }
console.log(Days['Sun'] === 0)

const enum Directions { up, down, left, right }
let directions = [Directions.up, Directions.down, Directions.left, Directions.right]
console.log(directions)

declare const enum Directions2 { up, down, left, right }
let directions2 = [Directions2.up, Directions2.down, Directions2.left, Directions2.right]
console.log(directions2)
