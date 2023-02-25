import Plane from "./Plane.js";

export default class Airline{
    constructor() {
        if(typeof Airline.instance === 'object') {
            return Airline.instance;
        }
        Airline.instance = this;
        return this;
    }
    #planes = [];

    getAllPlanes(){
        return this.#planes;
    }
    getPlane(id){
        return this.#planes[id];
    }

    addPlane(plane){
        this.#planes.push(plane);
    }

    deletePlane(id){
        this.#planes.splice(id, 1);
    }

    printPlanesList(){
      this.#planes.forEach(element => {
        let planeInfo = `Type: ${element.getType()}, Model: ${element.getModel()}, Flight range: ${element.getFlightRange()}, `;
        if(element.getType() === 'passanger'){
            planeInfo = planeInfo + `Passangers limit: ${element.getPassangersNumber()}`
        } else {
            planeInfo = planeInfo + `Cargo capacity limit: ${element.getCargoCapacity()}`
        }
        console.log(planeInfo);
      });
    }

    sortPlanesByFlightRange(){
        this.#planes.sort((a, b) => a.getFlightRange() > b.getFlightRange() ? 1 : -1);
    }
    getTotalPlanesCapacity(){
        let result = {
            totalPassangersCapacity: 0,
            totalCargoCapacity: 0
        }
        this.#planes.forEach(element => {
            if(element.getType() === 'passanger'){
                result.totalPassangersCapacity += element.getPassangersNumber();
            }else{
                result.totalCargoCapacity += element.getCargoCapacity();
            }
        });
        return result;
    }

    /**
     * Method for searching for an planes by a set of parameters
     * To IGNORE a parameter, pass the value {null} to it.
     * @param {string} type of searching plane
     * @param {string} model of searching plane
     * @param {number} flightRange of searching plane
     * @param {number} capacity of searching plane
     * @returns {Plane[]} An array of planes matching the search parameters
     */
    searchPlane(type, model, flightRange, capacity){

        let resultArray = [];
        this.#planes.forEach(element => {
            resultArray.push(element);
        });

        if(type != null){
            resultArray = resultArray.filter(element => element.getType() === type);
        }
        if(model != null){
            resultArray = resultArray.filter(element => element.getModel() === model);
        }
        if(flightRange != null){
            resultArray = resultArray.filter(element => element.getFlightRange() === flightRange);
        }
        if(capacity != null){
        resultArray = resultArray.filter(element => {
            if(element.getType()==='cargo'){
                element.getCargoCapacity() === capacity;
            } else {
                element.getPassangersNumber() === capacity;
            }
            })
        }
        
        return resultArray.length > 0 ? resultArray : "Nothing found";
    }
}
