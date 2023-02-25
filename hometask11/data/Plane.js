export default class Plane {
    #model;
    #flightRange;
    #type;
    constructor(model, flightRange, type){
        this.#model = model;
        this.#flightRange = flightRange;
        this.#type = type;
    }  

    getModel(){
        return this.#model;
    }

    setModel(model){
        this.#model = model;
    }

    getFlightRange(){
        return this.#flightRange;
    }

    setFlightRange(flightRange){
        this.#flightRange = flightRange;
    }
    getType(){
        return this.#type;
    }

    setType(type){
        this.#type = type;
    }
}


