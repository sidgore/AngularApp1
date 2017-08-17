import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hello</h1>
  <br>
  <p>{{myObject.location}}</p>
  
  <ul>
<li *ngFor="let r of myArr">{{r}}</li>  
  </ul>

  <button [disabled] ="buttonStatus" name="My Button"></button>


 
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works';


  myObject={
    gender:'male',
    age:33,
    location:'San Jose',

  };
buttonStatus = false;
  myArr=['him','hers','yours'];



   angularLogo = 'https://angular.io/assets/images/support/angular-404.svg';
}
