import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todolist.html',
  styleUrls: [ './todolist.css' ]
})
export class todolistComponent  {
  name = 'Angular ' + VERSION.major;
  todos = [{task : 'yoga'},{task : 'yoga'}];
}
