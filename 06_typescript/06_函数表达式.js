function sum(x, y) {
    return x + y;
}
var mySum = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
// 可选参数
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + lastName;
    }
    else {
        return firstName;
    }
}
// 参数默认值
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Cat'; }
    return firstName + lastName;
}
// 剩余参数
function push(arr) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        arr.push(item);
    });
}
var a = [];
push(a, 1, 2, 3, 4);
console.log(a);
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else {
        return x.split('').reverse().join('');
    }
}
