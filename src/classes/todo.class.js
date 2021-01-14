
export class Todo{

    //Objeto estatico para instanciar mis metodos
    static fromJson({id, tarea, completado, creado}) {
        
        const tempTodo = new Todo(tarea);

        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }

    constructor(tarea) {
        
        this.tarea = tarea;

        this.id = new Date().getTime();//Id unico con fecha y hora
        this.completado = false;
        this.creado = new Date();
    }

    imprimirClase() {
        console.log(`${this.tarea} - ${this.id}`);
    }
}