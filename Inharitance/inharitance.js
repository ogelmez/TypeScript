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
var Kisi = /** @class */ (function () {
    function Kisi() {
    }
    Object.defineProperty(Kisi.prototype, "Ad", {
        get: function () {
            return "Kisi adı" + this._adi;
        },
        set: function (adi) {
            this._adi = adi;
        },
        enumerable: true,
        configurable: true
    });
    Kisi.prototype.kisiKaydet = function () {
        console.log("Kisi kaydedildi.");
    };
    return Kisi;
}());
var Musteri = /** @class */ (function (_super) {
    __extends(Musteri, _super);
    function Musteri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Musteri.prototype.maasOde = function () {
        console.log("Maas odendi.");
    };
    return Musteri;
}(Kisi));
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personel.prototype.personelSil = function () {
        console.log("Personel silindi");
    };
    return Personel;
}(Musteri));
var musteri = new Musteri();
musteri.Ad = "Ozan";
console.log(musteri.Ad);
musteri.kisiKaydet();
musteri.maasOde();
var personel = new Personel();
personel.maasOde();
personel.personelSil();
personel.kisiKaydet();
