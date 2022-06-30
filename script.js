let moneda = "Woolongs"
let peloSucio = false

// el pelo está sucio, pero primero hay que conseguir dinero para comprar champoo
alert("el pelo está sucio, tengo que lavarlo")
for (let dinero = 0; dinero < 110; dinero = dinero + 10) {
    alert("para trabajar y acumular dinero para poder comprar un champoo has click en aceptar o presiona enter. Llevas " + dinero + " " + moneda + "");
}

// Algoritmo para tener el pelo limpio

let peloChampoo = "no"
let enjuagar
let cantidadMl
let comprarChampoo
let tengoChampoo

do {
    alert("Sales a comprar un champoo")
    comprarChampoo = prompt("¿cuesta 100 Woolongs, comprar? responda si o no")
    if(comprarChampoo == "si" ) {
        alert("champoo comprado! llegando a la casa a lavar el pelo")
        tengoChampoo = false
    } else {
        alert("Mi pelo está sucio!")
        tengoChampoo = true
    }
} while (tengoChampoo)

if (tengoChampoo = true) {
    peloSucio = true
} else {
    peloSucio = false
}

// algoritmo para que el pelo quede limpio al lavarlo

while(peloSucio = true) {
    peloChampoo = prompt("¿echarse champoo? responda si o no").toLowerCase()
    if(peloChampoo = "si") {
        cantidadMl = prompt("Igrese la cantidad de ml de champoo(en número) que le va a echar")
        alert("Echándole champoo...")
        alert("lavando el pelo")
        enjuagar = prompt("aún no está del todo limpio, enjuagar? si o no").toLowerCase()
        console.log(enjuagar)
        if(cantidadMl >= 10 && enjuagar == "si") {
            alert("Listo!, el pelo ya está limpio :D")
            break
        } else if (cantidadMl < 10 && enjuagar == "si") {
            alert("colocaste demasiado poco!")
            alert("el pelo sigue sucio! :c")
        } else {
            alert("el pelo sigue sucio!! :c")
        }
    } else if (peloChampoo == "no"){
        alert("el pelo sigue sucio! y seguirá sucio :c")
    }
}

