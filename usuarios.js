export function crearUsuario(nombre, rol){
    let obj = {
        nombre: nombre, 
        rol : rol, 
        fechaRegistro: "16/7/2025",
        mostrarInfo: function () {
            console.log(this.nombre, this.rol, this.fechaRegistro);
        }
    };

    return obj


}

