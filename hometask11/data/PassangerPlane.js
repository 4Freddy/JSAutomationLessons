export class PassangerPlane extends Plane{
    #passangersNumber;

    constructor(model, flightRange, passangersNumber){
        super(model,flightRange)
        this.passangersNumber = passangersNumber;
    }

    getPassangersNumber(){
        return this.#passangersNumber;
    }
    
    setPassangersNumber(passangersNumber){
        this.#passangersNumber = passangersNumber;
    }
}