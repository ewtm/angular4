import { Component } from '@angular/core';
import {Task} from "../task";

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent  {

  tasks = [];
  entrada:string =  "";
  task:Task = {
      name: "",
      value :0,
      date_launch: "2017-07-07",
  };
  
  public add(){
    //criar um objeto para nao repetir na view
    let task = Object.assign({},this.task);
    this.tasks.push(task);
    
  }

}
