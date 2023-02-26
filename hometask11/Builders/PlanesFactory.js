import CargoPlane from "../data/CargoPlane.js";
import PassangerPlane from "../data/PassangerPlane.js";

export default class PlanesFactory {
    createPlane(type, model, flightRange, capacity){
    if(type === 'cargo'){
        return new CargoPlane(model, flightRange, capacity)
    }
    else if (type ==='passanger'){
        return new PassangerPlane(model, flightRange, capacity)
    } 
    else throw new Error('Unknow plane type');
    }
}