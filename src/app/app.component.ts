import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  msg : any = 'Cc';
  public id? : number = 1;

  updateName(newName: string) {
    this.name = newName;
  }
}
