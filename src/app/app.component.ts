import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormGroup, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import {MatListModule} from '@angular/material/list';


interface Shoes {
  value: string;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatInputModule, MatButtonModule, FormsModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatListModule],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_components';

  form: FormGroup;
  shoes: Shoes[] = [
    {value: 'boots', name: 'Boots'},
    {value: 'clogs', name: 'Clogs'},
    {value: 'loafers', name: 'Loafers'},
    {value: 'moccasins', name: 'Moccasins'},
    {value: 'sneakers', name: 'Sneakers'},
  ];
  shoesControl = new FormControl();

  constructor() {
    this.form = new FormGroup({
      clothes: this.shoesControl,
    });
  }
}
