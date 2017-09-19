import { Component, OnInit } from '@angular/core';
import { LoginService} from '../login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
roles = ['Admin','User'];
roleSelected:string=this.roles[0];
email="";
password="";
userName="";
error="hide";
showSignUp:boolean=false;
  constructor(private router:Router,private LoginService:LoginService){
    if(LoginService.UserStatus) 
      this.router.navigate(['/'+this.LoginService.userRole.toLowerCase()]);
  }

  ngOnInit() {
  }
  signup() {
      if(this.userName==""|| this.email==""|| this.password=="")
      {
          this.error="ALL FIELDS ARE REQUIRED";
            return false;
      }
      else 
        {
           if( !this.LoginService.SignUp(this.userName,this.email,this.password,this.roleSelected))
		  {
          this.error=this.LoginService.error;
          return false;
      }
            else
              {
                this.router.navigate(['/'+this.roleSelected.toLowerCase()]);
              }
        }
       
    
 
    
   
  }
	onSubmitLogin(data)
    {
      if(data.email=="" ||data.password=="" )
      {
          this.error="ALL FIELDS ARE REQUIRED";
            return false;
      }
      else 
      {
          if(!this.LoginService.login(data.email,data.password))
        {
          this.error=this.LoginService.error;
          return false;
        }
         else
              {
                this.router.navigate(['/'+this.LoginService.userRole.toLowerCase()]);
              }
      }
   
    }
            signupEnable()
            {
              this.showSignUp=!this.showSignUp;
            }

}
