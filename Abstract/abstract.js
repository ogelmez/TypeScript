// Ortak ve ya ortak olmayan yöntemler için kullanılan sınıf biçimidir.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Kredi = /** @class */ (function () {
    function Kredi() {
    }
    Kredi.prototype.Kaydet = function () {
        console.log("Kaydedilme başarılı");
    };
    return Kredi;
}());
var XKredi = /** @class */ (function (_super) {
    __extends(XKredi, _super);
    function XKredi() {
        return _super.call(this) || this; // abstract classlardaki constructura ulaşmak için kullanırız. Parametre girilseydi super ile gönderecektik.
    }
    XKredi.prototype.Hesapla = function () {
        console.log("X kredisi hesaplandı");
    };
    XKredi.prototype.ParaMiktari = function (miktar) {
        console.log(miktar + " tl kredi verildi.");
    };
    return XKredi;
}(Kredi));
var YKredi = /** @class */ (function (_super) {
    __extends(YKredi, _super);
    function YKredi() {
        return _super.call(this) || this;
    }
    YKredi.prototype.Hesapla = function () {
        console.log("Y kredisi hesaplandı");
    };
    return YKredi;
}(Kredi));
var xKredi = new XKredi();
xKredi.Hesapla();
xKredi.ParaMiktari(10000);
xKredi.Kaydet();
var yKredi = new YKredi();
yKredi.Hesapla();
yKredi.Kaydet();
// sureki ayrı ayrı referans tip oluşturmaktansa bu şekilde kullanarak tüm referansları aynı nesne üzerinden yürütüyoruz.
var anaKredi;
anaKredi = new XKredi();
anaKredi = new YKredi();
