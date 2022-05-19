export default class Impuestos{
  #montoBrutoAnual = 0;
  #deducciones = 0;
  constructor(montoBrutoAnual, deducciones){
    this.#montoBrutoAnual = montoBrutoAnual;
    this.#deducciones = deducciones;
  }

  get getMontoBrutoAnual(){
    return this.#montoBrutoAnual;
  }

  set setMontoBrutoAnual(montoBrutoAnual){
    this.#montoBrutoAnual = montoBrutoAnual;
  }

  get getDeducciones(){
    return this.#deducciones;
  }

  set setDeducciones(deducciones){
    this.#deducciones = deducciones;
  }
}
