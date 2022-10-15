import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listTarea: Tarea[] = [];
  nombreTarea = "";
  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(): void {

    //crear un objeto tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }
    console.log(this.nombreTarea);
    //agregar el objeto tarea al array
    this.listTarea.push(tarea);

    //reset al input
    this.nombreTarea = "";

  }

  eliminarTarea(index:number):void{
    this.listTarea.splice(index,1);
  }

  actualizarTarea(tarea:Tarea,index:number):void{
    this.listTarea[index].estado = !tarea.estado;
  }
}
