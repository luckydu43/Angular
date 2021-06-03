import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from 'src/app/todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {

  todos$!:Observable<Todo[]>

  displayedColumns: string[] = ['id', 'title', "completed", "dueDate", "colSupprimer"];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todos$ = this.getTodos();
  }

  getTodos(): Observable<Todo[]> {
    return this.todoService.findAll();
  } 

  doDelete(todo:Todo):void{
    this.todoService.delete(todo).subscribe(()=> {this.todos$ = this.todoService.findAll()});
  }
}