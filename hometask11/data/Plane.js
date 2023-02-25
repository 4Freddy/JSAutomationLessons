class Plane {
    #model;
    #flightRange

    constructor(model, flightRange){
        this.#model = model;
        this.#flightRange = flightRange;
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
}


