import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo-list/models';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-communications',
  templateUrl: './communications.component.html',
  styleUrls: ['./communications.component.css']
})
export class CommunicationsComponent implements OnInit {

  // todoList: TodoItem[] = [
  //   { description: 'Mop floors', completed: true },
  //   { description: 'Take Out Trash', completed: false }
  // ];
  listHeader = 'Your super Awesome Todo List';
  todoList$: Observable<TodoItem[]>;
  constructor(private service: TodoService) { }

  ngOnInit() {
    this.todoList$ = this.service.getTodoItems();
  }

  onItemAdded(description: string) {
    this.service.addTodoItem(description);
  }

}
