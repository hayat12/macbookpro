import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Routes, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);
 
  myForm = new FormGroup({
    myDate: new FormControl(new Date())
  });

}
