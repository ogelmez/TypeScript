function topla(x, y) {
    return x + y;
}
function topla2(x, y) {
    return x + y;
}
var topla3 = function (x, y) {
    return x + y;
};
console.log(topla(2, 3));
console.log(topla2(2, 4));
console.log(topla3(1, 4));
// console.log(topla(2)) bu ifadeyi kullandığımızda js tarafında çalışırken ts tarafında çalışmaz.x=2 iken y değeri undefined'dir.Çnkü default değer olması gerekiyor.
// default kullanım
var toplaDefault = function (x, y) {
    if (y === void 0) { y = 4; }
    return x + y;
};
console.log(toplaDefault(3));
var toplaUndefined = function (x, y) {
    if (y) //eğer y tanımlanmıssa undefined degil ise
     {
        return x + y;
    }
    return x;
};
//function (x?:number,y:number){} bu kullanım yanlıstır cünkü undefined gibi tipler sonradan yazılmalıdır.
console.log(toplaUndefined(3));
console.log(toplaUndefined(3, 5));
//Rest parametreleri: Parametre sayımızı bilmiyorsak rest kullanırız. Params'lar gibi
var fonksiyonRest = function (sporcu1) {
    var digerSporcular = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerSporcular[_i - 1] = arguments[_i];
    }
    //Burada kısaca string bir dizi yarattık.
    return sporcu1 + " " + digerSporcular.join(" ");
};
console.log(fonksiyonRest("A", "B", "C"));
var array = function (arrayIsim) {
    return arrayIsim;
};
console.log(array(["Sude", "Ahmet", "Mehmet"]));
