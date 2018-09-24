var myFavoriteNum;
myFavoriteNum = 7;
myFavoriteNum = 'seven';
// function getLength(something: string | number): number {
// return something.length // error
// }
function getLength(something) {
    // return something.length // error
    return something.toString();
}
