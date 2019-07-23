class Takim{ 
    _takimAdi:string // default olarak publictir. 
    _takimKapasitesi:number
    constructor(takimAdi:string,takimKapasitesi:number){
        this._takimAdi=takimAdi
        this._takimKapasitesi=takimKapasitesi
    }
    TakimGetir(){
        console.log(this._takimAdi + " takimi " + this._takimKapasitesi + " kapasiteye sahip." )
    }
   
    }

let takim = new Takim("Fenerbahce",2)
takim.TakimGetir()
console.log(takim._takimAdi)
console.log(takim._takimKapasitesi)
