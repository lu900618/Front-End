let myFavoriteNum: string | number
myFavoriteNum = 7
myFavoriteNum = 'seven'

// function getLength(something: string | number): number {
  // return something.length // error
// }


function getLength(something: string | number): string {
  // return something.length // error
  return something.toString()
}