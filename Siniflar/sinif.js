var Takim = /** @class */ (function () {
    function Takim(takimAdi, takimKapasitesi) {
        this._takimAdi = takimAdi;
        this._takimKapasitesi = takimKapasitesi;
    }
    Takim.prototype.TakimGetir = function () {
        console.log(this._takimAdi + " takimi " + this._takimKapasitesi + "  kapasiteye sahip.");
    };
    return Takim;
}());
var takim = new Takim("Fenerbahce", 2);
takim.TakimGetir();
console.log(takim._takimAdi);
console.log(takim._takimKapasitesi);
