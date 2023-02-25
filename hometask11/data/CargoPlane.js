import Plane from "./Plane.js";

export default class CargoPlane extends Plane{
    #cargoCapacity

    constructor(model, flightRange, cargoCapacity){
        super(model,flightRange)
        this.#cargoCapacity = cargoCapacity;
        this.setType("cargo");
    }

    getCargoCapacity(){
        return this.#cargoCapacity;
    }

    setCargoCapacity(cargoCapacity){
        this.#cargoCapacity = cargoCapacity;
    }
}