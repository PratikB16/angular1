// import { Component } from '@angular/core';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Scriting lab';
//   players = ["virat","dhoni"]
//   //inputValue:string="typehere"
//   //tasks = ["Swimming","running"]
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: { text: string; completed: boolean }[] = [];
  newTask = '';

  addTask() {
    if (this.newTask.trim() === '') return;
    this.tasks.push({ text: this.newTask, completed: false });
    this.newTask = '';
  }
}