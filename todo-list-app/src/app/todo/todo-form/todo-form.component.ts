import { Component, OnInit } from '@angular/core';
import { Action } from 'src/app/action';
import { BusService } from 'src/app/bus.service';
import { TodoService } from 'src/app/todo.service';
import { TypeAction } from 'src/app/type-action';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoForm: Todo = {
    title: "Titre",
    dueDate: 0,
    completed: false,
  }

  constructor(private todoService: TodoService, private bus: BusService) { }

  ngOnInit(): void {
  }

  saveTodo() {
    const todo_save: Todo = {
      ...this.todoForm, dueDate: new Date(this.todoForm.dueDate).getTime()
    }
    const a: Action = { type: TypeAction.newTodo, payload: todo_save }
    console.log("envoi d'un nouveau TODO dans la queue")
    this.bus.dispatch(a)
  }

}
