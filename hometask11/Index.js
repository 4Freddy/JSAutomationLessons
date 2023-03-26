
import Airline from './data/Airline.js';
import PlanesFactory from './Builders/PlanesFactory.js';


let airline = new Airline();
let planesFactory = new PlanesFactory();
airline.addPlane(planesFactory.createPlane("passanger", "Boeing-737", 1000, 300));
airline.addPlane(planesFactory.createPlane("passanger", "Boeing-747", 1500, 100));
airline.addPlane(planesFactory.createPlane("passanger", "Boeing-777", 500, 200));
airline.addPlane(planesFactory.createPlane("cargo", "TU-154", 1250, 5000));
airline.addPlane(planesFactory.createPlane("cargo", "TU-155", 2000, 7500));
airline.addPlane(planesFactory.createPlane("cargo", "TU-157", 750, 3000));

airline.getTotalPlanesCapacity();
console.log(airline.getTotalPlanesCapacity());

airline.sortPlanesByFlightRange();
airline.printPlanesList();

let serchresult = airline.searchPlane('cargo', null, 1250, null);
console.log(serchresult);

