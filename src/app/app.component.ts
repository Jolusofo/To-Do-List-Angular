import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: ['../acessibility.styl']
})
export class AppComponent {
  title = 'To-Do-List';

  acess:boolean = false;
  

  acessbility(){
    this.acess = !this.acess
  }
  
}
