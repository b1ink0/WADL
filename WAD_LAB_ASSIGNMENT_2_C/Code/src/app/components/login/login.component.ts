import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import data1 from "../../../assets/db.json"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: any = FormGroup;
  users:any = [] ;
  constructor(private fb: FormBuilder, private router: Router, private commserv: CommonService) {}

  ngOnInit(): void {
    this.login = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
 
  }

 
  loginSubmit(data:any){
    let flag = 1 ;
    console.log(data1)
    data1.forEach((element:any) => {
      if(element.name === data.name && element.email === data.email){
        flag = 0 ;
        localStorage.setItem('user', JSON.stringify(element));
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['home']) ;
      }
    });

    if(flag === 1){
      alert("Invalid") ;
    }
  }

  gotoSignup() {
    this.router.navigate(['register']);
  }
}
