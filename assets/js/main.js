import Cliente from './cliente.js';

var elCliente = new Cliente('Didier');

console.log(elCliente);
console.log(`El valor a pagar por impuestos de parte de ${elCliente.getNombre} es : ${elCliente.calcularImpuesto()}`)
