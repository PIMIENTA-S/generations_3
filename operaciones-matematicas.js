import { PI, IVA, DESCUENTO } from "./constantes.js";

export function sumar(a, b) {
    return a + b;
}

export function restar(a, b) {
    return a - b;
}

export function multiplicar(a, b) {
    return a * b;
}

export function areaCirculo(radio) {
    return PI * (radio**2);
}

export function calcularTotal(precio, cantidad){
    return precio * cantidad
}

export function aplicarImpuestos(total){
    return total + (total * IVA)
}

export function aplicarDescuento(total){
    return total - (total * DESCUENTO)
}

export function aplicarDescuentoPorRol(total, rol){
    if (rol == "admin"){
        return total + (total * 0.2)
    }else{
        return total + (total * DESCUENTO)
    }


}