// Ortak ve ya ortak olmayan yöntemler için kullanılan sınıf biçimidir.
// Gövdesi olan ve olmayan metodlar olarak kullanılır. Gövdesi olanlar ortak metodlardır.Diğer gövdesi olmayan metodlar override edilir.
abstract class Kredi {
    constructor() {
        
    }
    Kaydet():void{
        console.log("Kaydedilme başarılı")
    }
    abstract Hesapla():void;

}
class XKredi extends Kredi{
    constructor(){
        super() // abstract classlardaki constructura ulaşmak için kullanırız. Parametre girilseydi super ile gönderecektik.
    }
    Hesapla(): void {
        console.log("X kredisi hesaplandı")
    }

    ParaMiktari(miktar:number){
        console.log(miktar + " tl kredi verildi.")
    }

}
class YKredi extends Kredi{
    
    constructor(){
        super()
    }
    Hesapla(): void {
       console.log("Y kredisi hesaplandı")
    }
}

let xKredi= new XKredi()
xKredi.Hesapla()
xKredi.ParaMiktari(10000)
xKredi.Kaydet()
let yKredi=new YKredi()
yKredi.Hesapla()
yKredi.Kaydet()

// sureki ayrı ayrı referans tip oluşturmaktansa bu şekilde kullanarak tüm referansları aynı nesne üzerinden yürütüyoruz.
let anaKredi : Kredi
anaKredi= new XKredi()
anaKredi = new YKredi()

