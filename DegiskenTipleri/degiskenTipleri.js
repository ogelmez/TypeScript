function Merhaba(isim) {
    return "Merhaba " + isim;
}
var mesaj = Merhaba("ozan");
console.log(mesaj);
var sayi = 10;
var sayi1;
sayi1 = 1;
var dogruMu = true;
var yanlisMi;
yanlisMi = false;
var sehir = "Ankara";
var sehir2;
sehir2 = "İstanbul";
var sayilar = [1, 2, 3];
var sehirler = ["Ankara", "İstanbul"];
var sayıDizi = sayilar[1];
var tuple = ["İstanbul", 1];
var Renkler;
(function (Renkler) {
    Renkler[Renkler["Kirmizi"] = 1] = "Kirmizi";
    Renkler[Renkler["Mavi"] = 2] = "Mavi";
    Renkler[Renkler["Yesil"] = 3] = "Yesil";
})(Renkler || (Renkler = {}));
var renk = Renkler.Kirmizi;
console.log(renk);
var anyTipi = "Bursa"; // Daha çok servislerden tipini bilmediğimiz durumlarda kullanırız.
anyTipi = 2; //En son değeri alır
console.log(anyTipi);
var voidTipi1 = undefined;
console.log(voidTipi1);
var voidTipi = undefined;
voidTipi = console.log("Kaydedildi");
function voidFunction() {
    console.log("Silindi");
    //  return "Selam" geri dönüş yapamayız.
}
var voidMesaj = voidFunction();
//undefined null
var sayiUndefined; //suan bir şey atanmamıs undefined yani tip için kullanılır
var NullObject = /** @class */ (function () {
    function NullObject() {
    }
    return NullObject;
}());
