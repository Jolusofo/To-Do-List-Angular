import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../service/rest-api.service";
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})


export class TodoCreateComponent implements OnInit {


  @Input() modelCreate = { title: '', firstName: '', email: '', note: '' }


  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  emailid;
  formdata;
  
  ngOnInit() {
    
    this.formdata = new FormGroup({
      emailid: new FormControl("", 
      Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")   
      ]))

    });
   }

   onClickSubmit (data) {this.emailid = data.emailid;}


  addModel() {
    this.restApi.createModel(this.modelCreate).subscribe((data:
      {}) => {
      this.router.navigate(['/listas'])
    })
  }

}

