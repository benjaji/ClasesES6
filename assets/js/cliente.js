import Impuestos from './impuestos.js'
export default class Cliente{
  //atributos
  #nombre = '';
  losImpuestos = new Impuestos(1000,20);

  constructor(nombre){
    this.#nombre = nombre;
  }

  get getNombre(){
    return this.#nombre;
  }

  set setNombre(nombre){
    this.#nombre = nombre;
  }

  calcularImpuesto(){
    let valorPagar = (this.losImpuestos.getMontoBrutoAnual - this.losImpuestos.getDeducciones)*21/100;
    return valorPagar;
  }
}
