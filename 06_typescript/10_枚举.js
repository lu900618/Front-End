var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
console.log(Days['Sun'] === 0);
var directions = [0 /* up */, 1 /* down */, 2 /* left */, 3 /* right */];
console.log(directions);
var directions2 = [0 /* up */, 1 /* down */, 2 /* left */, 3 /* right */];
console.log(directions2);
