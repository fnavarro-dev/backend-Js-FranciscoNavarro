//Ejemplo desafío
// Misión: hacer una clase en js, ponerle una propiedad y hacer sus constructores
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

//-----------------------------------------------------------------------
console.log("================================")
//-----------------------------------------------------------------------

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
//...por medio de un método getter, por el encapsulamiento que hice

//-----------------------------------------------------------------------
console.log("================================")
//-----------------------------------------------------------------------
//esto no tiene ninguna propiedad hasta el momento, cero propiedades

class TicketManagerPOO2 {
    //ahora, abajo, se declara primero propiedad events y después métodos
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

//-----------------------------------------------------------------------
console.log("================================")
//-----------------------------------------------------------------------
//si metemos un método add,
//cambia la cosa

class TicketManagerPOO3 {
    #events

    constructor() {
        this.#events = [] 
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


//-----------------------------------------------------------------------
console.log("================================")
//-----------------------------------------------------------------------
//También nos piden que no se repita un parámetro, por ejemplo, 
//...no poder ingresar dos veces un evento de Shakira en mi estadio
//sino que de un error tal como que "error, artista ya ingresado"
//¿Dónde iría la comprobación?
//abajo de addEvent y arriba de declarar el newEvent con let
//también pide validación de ingresar las 4 caracteristicas


class TicketManagerPOO4 {
    #events

    constructor() {
        this.#events = [] 
    }

    getEventsPOO4 = () => {
        return this.#events
    }

    addEventPOO4 = (artist, description, price, capacity) => {
        //TODO: Aquí iría la validación de todos los argumentos
        if (!artist || !description || !price || !capacity) {
            console.error('Campos incompletos. Rellénalos bro')
            return //sin return se agrega Piqué igual, pero mostrando el error, ojo
        }
        //aquí la validación para no repetir artist
        //usaremos método find del arreglo #events
        //método find devuelve el primero que cumpla o muestra undefined
        let existingEvent = this.#events.find(event => event.artist === artist)
        if (existingEvent) {
            //throw new Error('Ya existe un evento con este artista')
            console.error('Artista repetido bro, agrega otro artista como evento')
            return
        }
        let newEventsPOO3 = {
            artist, description, price, capacity
        }
        this.#events.push(newEventsPOO3)
    }
    
}

const ticketManagerPOO4 = new TicketManagerPOO4() 
ticketManagerPOO4.addEventPOO4('Shakira', 'Concierto del despecho', 1500, 500)
ticketManagerPOO4.addEventPOO4('Piqué', 'Session 53', 100) //aquí está el add incompleto
ticketManagerPOO4.addEventPOO4('Shakira', 'Concierto del despecho 2', 4000, 700)
console.log(ticketManagerPOO4.getEventsPOO4())

//-----------------------------------------------------------------------
console.log("================================")
//-----------------------------------------------------------------------
//piden también que se genere los events con un ID autoincrementable
class TicketManagerPOO5 {
    #events

    constructor() {
        this.#events = [] 
    }

    getEventsPOO5 = () => {
        return this.#events
    }

    addEventPOO5 = (artist, description, price, capacity) => {
        if (!artist || !description || !price || !capacity) {
            console.error('Campos incompletos. Rellénalos bro')
            return 
        }
        let existingEvent = this.#events.find(event => event.artist === artist)
        if (existingEvent) {
            console.error('Artista repetido bro, agrega otro artista como evento')
            return
        }
        
        //aquí colocaremos el generador casero de ID
        let id
        if (this.#events.length === 0) id = 1
        else id = this.#events.length + 1
        let newEventsPOO3 = {
            id, artist, description, price, capacity
        }
        this.#events.push(newEventsPOO3)
    }
    
}

const ticketManagerPOO5 = new TicketManagerPOO5() 
ticketManagerPOO5.addEventPOO5('Shakira', 'Concierto del despecho', 1500, 500)
ticketManagerPOO5.addEventPOO5('Piqué', 'Session 53', 100) 
ticketManagerPOO5.addEventPOO5('Shakira', 'Concierto del despecho 2', 4000, 700)
ticketManagerPOO5.addEventPOO5('Piqué', 'Session 53', 4000, 100)
console.log(ticketManagerPOO5.getEventsPOO5())

//-----------------------------------------------------------------------
console.log("================================") //node 01ClasesEnJsApuntes
//-----------------------------------------------------------------------
//¿Cuál es el problema con el generador de ID?
//el problema se generará al querer borrar algún artista
//grafiquemos el problema
//borraremos un artista de ID 2 y después añadiremos otro
//[{1}, {2}, {3}, {4}]
//[{1}, {3}, {4}]
//[{1}, {3}, {4}, {4}] //el nuevo artista queda con ID={4} y se repite
//esto es un bug

class TicketManagerPOO6 {
    #events

    constructor() {
        this.#events = [] 
    }

    getEventsPOO6 = () => {
        return this.#events
    }

    addEventPOO6 = (artist, description, price, capacity) => {
        if (!artist || !description || !price || !capacity) {
            console.error('Campos incompletos. Rellénalos bro')
            return 
        }
        let existingEvent = this.#events.find(event => event.artist === artist)
        if (existingEvent) {
            console.error('Artista repetido bro, agrega otro artista como evento')
            return
        }
        
        //aquí colocaremos el generador casero de ID
        let id
        if (this.#events.length === 0) id = 1
        // else id = this.#events.length + 1
        //haremos el ID considerando el ID del último hecho
        else id = this.#events[this.#events.length-1].id + 1

        let newEventsPOO3 = {
            id, artist, description, price, capacity
        }
        this.#events.push(newEventsPOO3)
    }
    
}

const ticketManagerPOO6 = new TicketManagerPOO6() 
ticketManagerPOO6.addEventPOO6('Shakira', 'Concierto del despecho', 1500, 500)
ticketManagerPOO6.addEventPOO6('Piqué', 'Session 53', 100) 
ticketManagerPOO6.addEventPOO6('Shakira', 'Concierto del despecho 2', 4000, 700)
ticketManagerPOO6.addEventPOO6('Piqué', 'Session 53', 4000, 100)
console.log(ticketManagerPOO6.getEventsPOO6())

//-----------------------------------------------------------------------
console.log("=====TicketManagerPOO7===========================") //node 01ClasesEnJsApuntes
//-----------------------------------------------------------------------
//funciona, pero tenemos un problema
//el método addEvent hace muchas cosas ahora
//valida 1 cosa, despues otra, genera IDs y pushea
//que 1 método haga 4 cosas es mal código
//cada método debería hacer una única cosa
//y debemos hacer métodos privados para cada uno
//
//haremos un método privado para ID

class TicketManagerPOO7 {
    #events

    constructor() {
        this.#events = [] 
    }

    //acá haremos el método privado para generar ID
    #generateID = () => {
        let id
        if (this.#events.length === 0) id = 1
        else id = this.#events[this.#events.length-1].id + 1
        return id
    }

    getEventsPOO7 = () => {
        return this.#events
    }

    addEventPOO7 = (artist, description, price, capacity) => {
        if (!artist || !description || !price || !capacity) {
            console.error('Campos incompletos. Rellénalos bro')
            return 
        }
        let existingEvent = this.#events.find(event => event.artist === artist)
        if (existingEvent) {
            console.error('Artista repetido bro, agrega otro artista como evento')
            return
        }
        
/*         //sacamos esto y lo ponemos arriba en un método aparte
        let id
        if (this.#events.length === 0) id = 1
        else id = this.#events[this.#events.length-1].id + 1
 */
// pondremos, en vez de lo anterior, let id = métodoprivadoparagenerarID
        let id = this.#generateID()

        let newEventsPOO3 = {
            id, artist, description, price, capacity
        }
        this.#events.push(newEventsPOO3)
    }
    
}

const ticketManagerPOO7 = new TicketManagerPOO7() 
ticketManagerPOO7.addEventPOO7('Shakira', 'Concierto del despecho', 1500, 500)
ticketManagerPOO7.addEventPOO7('Piqué', 'Session 53', 100) 
ticketManagerPOO7.addEventPOO7('Shakira', 'Concierto del despecho 2', 4000, 700)
ticketManagerPOO7.addEventPOO7('Piqué', 'Session 53', 4000, 100)
console.log(ticketManagerPOO7.getEventsPOO7())

//-----------------------------------------------------------------------
console.log("================================") //node 01ClasesEnJsApuntes
//-----------------------------------------------------------------------
//falta ahora agragar más métodos privados, para que el método add solo agregue
//queda como tarea
//los métodos los hacemos privados porque consideramos
//peligroso que desde afuera se puedan modificar
//ya tenemos eso sí, nuestro método getter con getEventsPOO7
//pero nos piden en el ejercicio tener un getProductById
//y que si el Id no existe muestre un mensaje "not found"
//
//¿El id es propiedad de la clase? No
//ID es parte del objeto que es parte de la propiedad events
//propiedad events es un array
//La clase tiene de propiedad events, no tiene propiedad id
//
//haremos la tarea pendiente

//-----------------------------------------------------------------------
console.log("=====TicketManagerPOO8===========================") //node 01ClasesEnJsApuntes
//-----------------------------------------------------------------------

class TicketManagerPOO8 {
    #events

    constructor() {
        this.#events = [] 
    }

    #generateID = () => {
        let id
        if (this.#events.length === 0) id = 1
        else id = this.#events[this.#events.length-1].id + 1
        return id
    }

    #validateFields = (artist, description, price, capacity) => {
        if (!artist || !description || !price || !capacity) {
            console.error('Campos incompletos. Rellénalos bro')
            return false
        }
        return true
    }

    #isArtistRepeated = (artist) => {
        let existingEvent = this.#events.find(event => event.artist === artist)
        if (existingEvent) {
            console.error('Artista repetido bro, agrega otro artista como evento')
            return true
        }
        return false
    }

    #addEventToList = (newEvent) => {
        this.#events.push(newEvent)
    }

    getEventsPOO8 = () => {
        return this.#events
    }
    
    //el addEvents queda mucho más limpio! :D
    addEventPOO8 = (artist, description, price, capacity) => {
        if (!this.#validateFields(artist, description, price, capacity) 
                || this.#isArtistRepeated(artist)) {
            return 
        }

        let id = this.#generateID()

        let newEvent = {
            id, artist, description, price, capacity
        }
        this.#addEventToList(newEvent)
    }

    getEventById = (id) => {
        //aquí ocupamos el mismo find que ocupamos para buscar artista
        let event = this.#events.find(event => event.id === id)
        if (event) {
            return event
        }
        console.error('Evento no encontrado bro')
        return null
    }
    
}

const ticketManagerPOO8 = new TicketManagerPOO8() 
ticketManagerPOO8.addEventPOO8('Shakira', 'Concierto del despecho', 1500, 500)
ticketManagerPOO8.addEventPOO8('Piqué', 'Session 53', 100) 
ticketManagerPOO8.addEventPOO8('Shakira', 'Concierto del despecho 2', 4000, 700)
ticketManagerPOO8.addEventPOO8('Piqué', 'Session 53', 4000, 100)
console.log(ticketManagerPOO8.getEventsPOO8())

console.log(ticketManagerPOO8.getEventById(2))

//-----------------------------------------------------------------------
console.log("================================") //node 01ClasesEnJsApuntes
//-----------------------------------------------------------------------
