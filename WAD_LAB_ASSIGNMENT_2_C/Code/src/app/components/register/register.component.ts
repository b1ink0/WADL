import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: any = FormGroup;
  id: any = 7 ;
  constructor(private fb: FormBuilder, private router: Router, private commServ:CommonService) {}

  ngOnInit(): void {
    this.register = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }

  registerSubmit(data: any) {
    console.log(data);
    let dataToPass = {
      name: data.name, email:data.email ,
      id:this.id++ 
    }
    localStorage.setItem('user', JSON.stringify(dataToPass));
    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['home']) ;
  }

  gotoLogin() {
    this.router.navigate(['']);
  }


}
