
export class CargoPlane extends Plane{
    #loadCapacity

    constructor(model, flightRange, loadCapacity){
        super(model,flightRange)
        this.#loadCapacity = loadCapacity;
    }

    getLoadCapacity(){
        return this.#loadCapacity;
    }

    setLoadCapacity(loadCapacity){
        this.#loadCapacity = loadCapacity;
    }
}