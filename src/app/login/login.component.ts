import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroupName } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../security/services/auth-service.service';
import { log } from 'util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
       user_name: any;
       pass_word: any;
  constructor(
          private route       : Router,
          private service     : AuthServiceService
      ){ }

  ngOnInit() {
    
            }
  login(v){
    this.service.getLoginUser(v).then((response)=>{
      this.route.navigate(['home']);
    }).catch((err)=>{
      this.route.navigate(['login']);
    });
  }
}
