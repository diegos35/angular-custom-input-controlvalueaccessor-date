import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  validate;

  loginForm: FormGroup;

  ngOnInit() {
    this.buildForm();
    this.load()
  }
  load(){
  const data=  {username: "asdf", password: "2023-02-28"}
  this.loginForm.controls.password.setValue(data.password)
  }

  buildForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('')
    })
  }

  submit() {
    this.validate = true;
    if (this.loginForm.valid) {
      const data = this.loginForm.value;
      console.log(data);
    }
  }
}
