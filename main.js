// PUNTO 1
// Tarea 1
import { PI, IVA } from "./constantes.js"
import { DIAS_SEMANA } from "./constantes.js"


// Tarea 2
let radio = 5
let area = PI * (radio ** 2)
let precio = 100
let precio_con_iva = precio + (precio * IVA)

// Tarea 3
let tercer_dia = DIAS_SEMANA[2]


// PUNTO 2
// Tarea 1
import { sumar, restar, multiplicar, areaCirculo, calcularTotal, aplicarImpuestos, aplicarDescuento, aplicarDescuentoPorRol } from "./operaciones-matematicas.js"


// Tarea 2

console.log("Resultado suma: " + sumar(7, 5));
console.log("Resultado resta: " + restar(7, 5));
console.log("Multiplicacion: " + multiplicar(7, 5));
console.log("Area del circulo: " + areaCirculo(17));



// PUNTO 3
// import {calcularTotal, aplicarDescuento, aplicarImpuestos} from './operaciones-matematicas.js'

class producto{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

let producto1 = new producto("manzana", 2000, 5)
let producto2 = new producto("pera", 3000, 10)
let producto3 = new producto("banana", 1000, 15)

let lista = [producto1, producto2, producto3]

let total = 0
for (let product of lista){
    let precio = calcularTotal(product.precio, product.cantidad)
    total += precio
}

console.log("Precio total: " + total)
console.log("Precio con impuestos: " + aplicarImpuestos(total))
console.log("Precio con descuento: " + aplicarDescuento(total))


import {ROLES} from './usuariosConstantes.js'
import {crearUsuario} from './usuarios.js';

let usuario_1 = crearUsuario("Pedro", ROLES.ADMIN)
let usuario_2 = crearUsuario("Carlos", ROLES.CLIENTE)

usuario_1.mostrarInfo()
usuario_2.mostrarInfo()


let totalAdmin = calcularTotal(25, 4);
let totalImpuestosAdmin = aplicarImpuestos(totalAdmin);
let totalFinalAdmin = aplicarDescuentoPorRol(totalImpuestosAdmin, usuario_1.rol);

console.log("Subtotal:", totalAdmin);
console.log("Con impuestos:", totalImpuestosAdmin);
console.log("Total con descuento por rol:", totalFinalAdmin);
console.log("")
let totalCliente = calcularTotal(50, 3);
let totalImpuestosCliente = aplicarImpuestos(totalCliente);
let totalFinalCliente = aplicarDescuentoPorRol(totalImpuestosCliente, usuario_2.rol);

console.log("Subtotal:", totalCliente);
console.log("Con impuestos:", totalImpuestosCliente);
console.log("Total con descuento por rol:", totalFinalCliente);
