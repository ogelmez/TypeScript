class Kisi{
    private _adi:string // kapsülleme bir değeri kullanıcıya sunup daha farklı bir değer verebiliyoruz.
    //Javadaki adıyla getter setter C# adıyla property get set kullanımı.
    get Ad(){ // deger okuma
        return "Kisi adı " + this._adi
    }
    set Ad(adi:string){ // deger atama 
        this._adi=adi
    }
    kisiKaydet(){
               
        console.log("Kisi kaydedildi.")
    }
    }
    class Musteri extends Kisi{
    
        maasOde(){
            console.log("Maas odendi.")
        }
    }
    class Personel extends Musteri{ // Personel sinifi hem Musteri'deki metodları hemde Musteri'nin extends ettiği metodları kullanabilir.
    
        personelSil(){
            console.log("Personel silindi")
        }
    }
    let musteri= new Musteri()
    musteri.Ad="Ozan"
    console.log(musteri.Ad)
    musteri.kisiKaydet()
    musteri.maasOde()
    
    let personel= new Personel()
    personel.maasOde()
    personel.personelSil()
    personel.kisiKaydet()