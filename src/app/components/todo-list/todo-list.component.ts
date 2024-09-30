import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type todo = {
  task: string,
  isDone: boolean
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})

export class TodoListComponent {
  
  todoList: todo[] = []
  
  todoTask : string = "";

  addTask(){

    let taskObject : todo = {
      task: this.todoTask,
      isDone: false
    }

    this.todoList.push(taskObject);

    this.todoTask = ""

  }
  done(task: string){
    for(let i in this.todoList){

      if(this.todoList[i].task == task){
        this.todoList[i].isDone = true
      }
      
    }
  }
  delete(task: string){

    this.todoList = this.todoList.filter(td => td.task != task)

  }
}
