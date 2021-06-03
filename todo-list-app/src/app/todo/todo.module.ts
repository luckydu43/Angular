import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoReactiveFormComponent } from './todo-reactive-form/todo-reactive-form.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; 



@NgModule({
  declarations: [
    TodoListComponent,
    TodoFormComponent,
    TodoReactiveFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    TodoListComponent,
    TodoFormComponent,
    TodoReactiveFormComponent
  ]
})
export class TodoModule {}
