// Metodların gövdesi yoktur. Referans tip olarak İnterface kullanır class değil.
// Tanımlanan tüm metodlar ve ya propertyler kullanılan yerlerin hepsinde kullanılmalıdır.
// Tüm değerleri vermek istiyorsak interface istemiyorsak class yapısını kullanmalıyız.
var Kisi = /** @class */ (function () {
    function Kisi() {
    }
    return Kisi;
}());
var interface = function (musteri) {
    console.log(musteri.id + " numaralı musteri " + musteri.firmaAdi + " firmasında çalışmakta");
};
var classKaydet = function (kisi) {
    console.log(kisi.firmaAdi);
};
interface({ id: 1, adi: "Oguz", firmaAdi: "Koc" }); // tüm değerleri almak zorunda
var kisi = new Kisi();
kisi.firmaAdi = "Sabanci";
classKaydet(kisi); // classta ise tek bir değişkeni çğırabiliyoruz.
var Firma = /** @class */ (function () {
    function Firma() {
    }
    Firma.prototype.kaydet = function () {
        console.log("Kaydetme basarılı.");
    };
    Firma.prototype.sil = function () {
        console.log("Silme işlemi başarılı.");
    };
    return Firma;
}());
var firma = new Firma();
firma.kaydet();
firma.sil();
