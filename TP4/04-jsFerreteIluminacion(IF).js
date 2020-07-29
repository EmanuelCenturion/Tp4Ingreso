/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    let cantidad;
    let precio = 35;
    let precioConDescuento;
    let marca;
    let impuesto;
    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    if (cantidad >= 6) {
        precioConDescuento = (cantidad * (precio - precio * 0.5));
    }
    if (cantidad == 5) {
        if (marca == "ArgentinaLuz") {
            precioConDescuento = (cantidad * (precio - precio * 0.4));
        } else {
            precioConDescuento = (cantidad * (precio - precio * 0.3));
        }
    }
    if (cantidad == 4) {
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
            precioConDescuento = (cantidad * (precio - precio * 0.25));
        } else {
            precioConDescuento = (cantidad * (precio - precio * 0.2));
        }
    }
    if (cantidad == 3) {
        if (marca == "ArgentinaLuz") {
            precioConDescuento = (cantidad * (precio - precio * 0.15));
        } else if (marca == "FelipeLamparas") {
            precioConDescuento = (cantidad * (precio - precio * 0.1));
        } else {
            precioConDescuento = (cantidad * (precio - precio * 0.05));
        }
    }
    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
    if (cantidad == 1 || cantidad == 2) {
        precio = precio * cantidad;
        document.getElementById("txtIdprecioDescuento").value = precio;
    }
    if (precioConDescuento > 120) {
        impuesto = precioConDescuento * 0.1;
        precioConDescuento = precioConDescuento + impuesto;
        document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
        alert("IIBB Usted pago: " + impuesto);
    }
}
