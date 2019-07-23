function generic<T>(x:T):T{
    return x;
}

let sayi= generic<number>(3)
console.log(sayi)
console.log(generic(4))
console.log(generic("Ankara"))

class GenericClass<T>{
    deger:T
        degerFunction(parametre:T){
        return parametre
    }
}
let genericClass= new GenericClass<string>();
console.log(genericClass.degerFunction("Bu bir generictir."))
genericClass.deger="Bu bir generic değerdir."
console.log(genericClass.deger)