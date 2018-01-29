import { Component } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'Buscar Cep';
  titleTarefas = "Tarefas";
  tasks:Array<Task> ;

/*
  constructor(){
    let taskService = new TaskService();
    this.tasks = taskService.tasks;
    this.tasks.push(
      {name:'Cozinhar',value:20,date_launch:'2018-01-11'}
    );
  }*/

}
