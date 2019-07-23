function generic(x) {
    return x;
}
var sayi = generic(3);
console.log(sayi);
console.log(generic(4));
console.log(generic("Ankara"));
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    GenericClass.prototype.degerFunction = function (parametre) {
        return parametre;
    };
    return GenericClass;
}());
var genericClass = new GenericClass();
console.log(genericClass.degerFunction("Bu bir generictir."));
genericClass.deger = "Bu bir generic değerdir.";
console.log(genericClass.deger);
