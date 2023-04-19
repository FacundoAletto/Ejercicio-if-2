const MONEDA_ETHEREUM = "ETH";
const MONEDA_DOLAR = "USD";
const TIPO_CAMBIO_ETHEREUM = 13.5400;
const TIPO_CAMBIO_DOLAR = 39685.40;

let cantBitcoinIngresada = prompt("Ingrese la cantidad de bitcoin");
let monedaIngresada = prompt("Ingrese moneda a la que quiere cambiar, ETH o USD");

if ((monedaIngresada == MONEDA_ETHEREUM)||(monedaIngresada == MONEDA_DOLAR)) {
   document.write("<h3>Bitcoin que desea cambiar= "+cantBitcoinIngresada+" </h3>");
   if (monedaIngresada == MONEDA_ETHEREUM) {
    document.write("<h3> Equivale a= " + (cantBitcoinIngresada*TIPO_CAMBIO_ETHEREUM) + " ethereum.</h3>");
   } else {
    document.write("<h3> Equivale a= " + (cantBitcoinIngresada*TIPO_CAMBIO_DOLAR) + " dólares.</h3");
   }
} else {
    document.write("Operación de cambio no permitida, este sitio acepta solo bitcoin para cambiar por ethereum o dólares.");
}