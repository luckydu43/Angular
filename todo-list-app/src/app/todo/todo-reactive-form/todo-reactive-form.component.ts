import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Action } from 'src/app/action';
import { BusService } from 'src/app/bus.service';
import { TodoService } from 'src/app/todo.service';
import { TypeAction } from 'src/app/type-action';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-reactive-form',
  templateUrl: './todo-reactive-form.component.html',
  styleUrls: ['./todo-reactive-form.component.css']
})
export class TodoReactiveFormComponent implements OnInit {


  todoForm = this.fb.group({
    title:[''],
    completed:[false],
    dueDate:[new Date().toISOString],
  })

  constructor(private fb: FormBuilder, private todoservice:TodoService, private bus:BusService) { }

  ngOnInit(): void {
  }

  saveTodo() {
    const todo_save: Todo = {
      ...this.todoForm.value, dueDate: new Date(this.todoForm.value.dueDate).getTime()
    }
    const a: Action = { type: TypeAction.newTodo, payload: todo_save }
    console.log("envoi d'un nouveau TODO dans la queue")
    this.bus.dispatch(a)
  }

}
