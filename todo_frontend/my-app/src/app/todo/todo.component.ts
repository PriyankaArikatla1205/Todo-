import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less']
})
export class TodoComponent implements OnInit {

  todo$:any;
  inputtext!: string
 
  
  
  
  getData() {
    return this.todo$ = this.todoservice.getDatasetTypes();
  }

  
  constructor(private todoservice:TodoService) {
    this.getData()
    console.log(this.todo$)
  }
  
  
  ngOnInit(): void {
  }
  
  
  newElement(){
    var data = {
      "task": this.inputtext,
      "completed": "false"
    }
   this.todoservice.UpdateTodos(data).subscribe(
     {
       next: (n) => {
        this.getData();
         
      }
    }
    );
  }
  checkUncheck(event:any,todo:any){
    var inputText = {
      "task" : todo.task,
      "completed": "true"?!todo.completed:"false"
    }
    this.todoservice.UpdateTodo(inputText,todo.id).subscribe({
      next: (n) =>{
        this.getData();
        // console.log(n)
      }
    }
    );
  }
  deleteTask(event:any,id:any){
   console.log(id)
    this.todoservice.delete(id).subscribe({
      next: (n) =>{
        this.getData();
        // console.log(n)
      }
    }
    );
  } 
 

 


}
