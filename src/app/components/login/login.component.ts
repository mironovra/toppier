import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../../services/AuthService/auth.service';
//import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  //providers: [AuthService,Router] 
})
export class LoginComponent implements OnInit {
  localUser = {
    username:'',
    password:''
  }

 // constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginFn()
  {
   /* this.authService.loginFn(this.localUser).then((response)=>{
      if(response)
      {

      }
      else{

      }
    });*/
  }

}
