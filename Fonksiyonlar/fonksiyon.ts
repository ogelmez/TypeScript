function topla(x,y){
    return x + y;
}

function topla2(x:number,y:number):number{
    return x + y;
}

let topla3= function(x:number,y:number):number{
    return x+y;
}

console.log(topla(2,3))
console.log(topla2(2,4))
console.log(topla3(1,4))

// console.log(topla(2)) bu ifadeyi kullandığımızda js tarafında çalışırken ts tarafında çalışmaz.x=2 iken y değeri undefined'dir.Çnkü default değer olması gerekiyor.
// default kullanım

let toplaDefault =  function(x:number,y:number=4){
    return x+y;
}

console.log(toplaDefault(3))

let toplaUndefined= function(x:number,y?:number):number{
    if(y) //eğer y tanımlanmıssa undefined degil ise
    {
        return x+y
    }
    return x
}

//function (x?:number,y:number){} bu kullanım yanlıstır cünkü undefined gibi tipler sonradan yazılmalıdır.
console.log(toplaUndefined(3))
console.log(toplaUndefined(3,5))

//Rest parametreleri: Parametre sayımızı bilmiyorsak rest kullanırız. Params'lar gibi

let fonksiyonRest=function(sporcu1:string,... digerSporcular:string[]){ // sporcu1 degiskenini yazmadanda kullanabiliriz.
//Burada kısaca string bir dizi yarattık.
return sporcu1 + " " + digerSporcular.join(" ")
}

console.log(fonksiyonRest("A","B","C"))

let array=function(arrayIsim:Array<string>){
   
    return arrayIsim
}

console.log(array( ["Sude","Ahmet","Mehmet"]))