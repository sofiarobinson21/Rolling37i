class Producto{
    constructor (nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    total(){
         let aPagar = this.precio * this.cantidad
         return ( `Total a pagar ${aPagar}`);
    }
    sacarProducto(){
        let menos = this.cantidad -1
        return (`Si decidiste a ultimo momento sacar una unidad de ${this.nombre} entonces estaras llevando ${menos} unidades`)
    }
}
let producto1 = new Producto(`manteca`, 300, 3);
let producto2 = new Producto(`cafe`, 600, 5);
let producto3 = new Producto(`Zanahorias`, 150, 12);

document.write(`<br>` + producto3.total());
document.write(`<br>` + producto2.sacarProducto());