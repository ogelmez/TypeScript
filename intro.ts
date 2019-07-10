function Merhaba(isim:string){
    return "Merhaba " + isim;
}

let mesaj= Merhaba("ozan")
console.log(mesaj)

let sayi : number = 10
let sayi1: number
sayi1= 1

let dogruMu : boolean = true
let yanlisMi : boolean
yanlisMi= false

let sehir: string ="Ankara"
let sehir2: string
sehir2 = "İstanbul"

let sayilar:Array<number> = [1,2,3]
let sehirler: Array<string> = ["Ankara","İstanbul"]
let sayıDizi= sayilar[1]

let tuple:[string,number]= ["İstanbul",1]

enum Renkler {Kirmizi=1,Mavi,Yesil}
let renk:Renkler = Renkler.Kirmizi
console.log(renk)

let anyTipi:any ="Bursa" // Daha çok servislerden tipini bilmediğimiz durumlarda kullanırız.
anyTipi=2 //En son değeri alır
console.log(anyTipi)

let voidTipi1:void = undefined
console.log(voidTipi1)
let voidTipi:void = undefined
voidTipi=console.log("Kaydedildi")

function voidFunction():void{
    console.log("Silindi")
  //  return "Selam" geri dönüş yapamayız.
}
let voidMesaj= voidFunction()
//undefined null

let sayiUndefined:number //suan bir şey atanmamıs undefined yani tip için kullanılır

class NullObject{
    //Suan bir yerde çağrılmamıs referans o yüzden null referans olur.New lemedik o yüzden null.
}
