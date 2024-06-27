let notaCem = Number (100)
let notaCinquenta = Number (50)
let notaVinte = Number (20)
let notaDez = Number (10)
let notaCinco = Number (5)
let notaDois = Number (2)

let valor = prompt("Digite o valor a ser sacado")  //350

let resto = Number(valor) //350

while(resto >= 100){ //350 - 250 - 150 - 50
    document.write(resto)
    resto = resto - 100 //250 - 150 - 5
}

while(resto >= 50){ //50 - 0
    document.write(resto - notaCinquenta)
    resto = resto - 50 // 0
}

while(resto >= 20){ //0
    document.write(resto - notaVinte)
    resto = resto - 20
}

while(resto >= 10){ //0
    document.write(resto - notaDez)
    resto = resto - 10
}

while(resto >= 5){ //0 
    document.write(resto - notaCinco)
    resto = resto - 5
}

while(resto >= 2){ //0
    document.write(resto - notaDois)
    resto = resto - 2
}

