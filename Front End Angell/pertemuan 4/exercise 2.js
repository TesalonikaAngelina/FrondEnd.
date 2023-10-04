// Buatlah fungsi yang menerima 1 input/parameter berupa angka 
// dan mengembalikan string apakah angka yang dimasukan adalah bilangan positif atau negatif
// buatlah dengan menggunakan IIFE dan callback function


(function (number){
    if (number > 0) {
        console.log(number, "Positif")
    }
    else{
        console.log(number, "Negatif")
    }
})(12);

(function (number){
    if (number < 0) {
        console.log(number, "Negatif")
    }
    else{
        console.log(number, "Positif")
    }
})(-12);

//callback function

function createPositifNegatif(number, callback){
    const check = number  == 0 ? "POSITIF" : "NEGATIF"
    callback(check)
}

function PositifNegatif(check){
    console.log(check)
}

createPositifNegatif(12, PositifNegatif)