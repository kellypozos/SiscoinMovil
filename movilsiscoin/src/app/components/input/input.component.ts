import { Component, Input } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {

  @Input() label:string;
  @Input() type:'text';
  @Input() form:any;

  focused: boolean;

  onBlur(event:any) {
    const value = event.target.value;
    if (!value) {
      this.focused = false;
    }
  }

}
