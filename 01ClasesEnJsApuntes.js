// hacer una clase en js, ponerle una propiedad y hacer sus constructores
//ejemplo con TicketManager
//debe crearse con el elemento products, el cual será un arreglo vacío

class TicketManager {
    constructor() {
        this.events = [] //propiedad events y arreglo vacío

    }
}

const ticketManager = new TicketManager() //instanciamos el objeto
console.log(ticketManager.events) //ya lo podemos consolear 

//abres terminal en el VSC y escribes: node 01ClasesEnJsApuntes
//y aparece el arreglo vacío: []

//Desde el punto de vista de POO estará bien que yo pueda
//acceder así a una propiedad directamente ?
//No, porque deberíamos usar getters and setters
//y la propiedad events debería ser privada (Con un #)
//al hacerla privada no va a funcionar sino hacemos 
//getters and setters

class TicketManagerPOO {
    //ahora abajo se declara primero propiedad y después métodos
    #events

    constructor() {
        this.#events = [] //propiedad events y arreglo vacío
    }

    getEventsPOO = () => {
        return this.#events
    }
}

const ticketManagerPOO = new TicketManagerPOO() 
console.log(ticketManagerPOO.getEventsPOO()) //aquí accedo a la propiedad
//por medio de un método getter, por el encapsulamiento que hice

//--------------------------------
//esto no tiene ninguna propiedad hasta el momento, cero propiedades

class TicketManagerPOO2 {
    //ahora abajo se declara primero propiedad y después métodos
    #events

    constructor(artist, description, price, capacity) {
        this.#events = [] //propiedad events y arreglo vacío
    }

    getEventsPOO2 = () => {
        return this.#events
    }

    
}

const ticketManagerPOO2 = new TicketManagerPOO2('Shakira', 'Concierto del despecho', 1500, 500) 
console.log(ticketManagerPOO2.getEventsPOO2())

//si metemos un método add,
//cambia la cosa

class TicketManagerPOO3 {
    //ahora abajo se declara primero propiedad y después métodos
    #events

    constructor() {
        this.#events = [] //propiedad events y arreglo vacío
    }

    getEventsPOO3 = () => {
        return this.#events
    }

    //con addEvent, las propiedades no las ponemos
    //en el constructor
    //aquí el add recibe 4 parámetros y después los pushea
    addEventPOO3 = (artist, description, price, capacity) => {
        let newEventsPOO3 = {
            artist, description, price, capacity
        }
        this.#events.push(newEventsPOO3)
    }
    
}

const ticketManagerPOO3 = new TicketManagerPOO3() 
ticketManagerPOO3.addEventPOO3('Shakira', 'Concierto del despecho', 1500, 500)
console.log(ticketManagerPOO3.getEventsPOO3())


