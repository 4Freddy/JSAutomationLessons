import Plane from "./Plane.js";

export default class PassangerPlane extends Plane{
    #passangersNumber;

    constructor(model, flightRange, passangersNumber){
        super(model,flightRange)
        this.#passangersNumber = passangersNumber;
        this.setType("passanger");
    }

    getPassangersNumber(){
        return this.#passangersNumber;
    }
    
    setPassangersNumber(passangersNumber){
        this.#passangersNumber = passangersNumber;
    }
}