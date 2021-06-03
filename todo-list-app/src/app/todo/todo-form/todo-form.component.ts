import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoForm:Todo={
    title:"Titre",
    dueDate:0,
    completed:false,
  }

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  saveTodo() {
    this.todoService.save(this.todoForm).subscribe()
  }

}
