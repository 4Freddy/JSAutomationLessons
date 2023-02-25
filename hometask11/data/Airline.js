class Airline{
    constructor() {
        if(typeof Airline.instance === 'object') {
            return Airline.instance;
        }
        Airline.instance = this;
        return this;
    }
    #planes = [];

    getPlanes(){
        return this.#planes;
    }

    addPlane(plane){
        this.#planes.push(plane);
    }

    deletePlane(id){
        this.#planes.splice(id, 1);
    }
}

//export {Airline}