import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1> <br>
  <input [value] = "name" (keyup)="onKey($event)" #nameInput />`,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
  @Output() nameChange = new EventEmitter<string>();
  @ViewChild('nameInput') nameInput: ViewChild;

  onKey(event: any) {
    this.nameChange.emit(event.target.value);
    console.log(this.nameInput);
  }
}
