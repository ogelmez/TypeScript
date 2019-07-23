// Metodların gövdesi yoktur. Referans tip olarak İnterface kullanır class değil.
// Tanımlanan tüm metodlar ve ya propertyler kullanılan yerlerin hepsinde kullanılmalıdır.
// Tüm değerleri vermek istiyorsak interface istemiyorsak class yapısını kullanmalıyız.

interface IMusteri{
    id:number;
    adi:string;
    firmaAdi:string;
    

    
} 
 class Kisi{
    id:number;
    adi:string;
    firmaAdi:string;

}
interface IFirmaGörevlisi{
    kaydet();
    sil();
}
let interface= function(musteri:IMusteri){
    console.log(musteri.id+" numaralı musteri "+musteri.firmaAdi + " firmasında çalışmakta")
}
let classKaydet= function (kisi:Kisi){
    console.log(kisi.firmaAdi)
}


interface({id : 1, adi: "Oguz", firmaAdi : "Koc"}); // tüm değerleri almak zorunda

let kisi= new Kisi()
kisi.firmaAdi="Sabanci"
classKaydet(kisi) // classta ise tek bir değişkeni çğırabiliyoruz.

class Firma  implements IFirmaGörevlisi{
    kaydet() {
       console.log("Kaydetme basarılı.")
    }  
      sil() {
        console.log("Silme işlemi başarılı.");
    }


}
let firma = new Firma()
firma.kaydet()
firma.sil()
