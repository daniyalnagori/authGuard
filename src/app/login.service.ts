import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
 isLogin:boolean=false;
 userName: string;
 userRole: string;
 error="";
/////////////////////////////////////////////////////////////////
allowedUsers: {email,name,pass,userRole}[]=[
    
  ];
////////////////////////////////////////////////////////////////
  constructor() 
  {
    let temp;
     if(temp=localStorage.getItem("users"))
     {
       this.allowedUsers=JSON.parse(temp);
       console.log(this.allowedUsers);
     }
  console.log(this.allowedUsers);
  }
   set UserStatus(status:boolean){
     this.isLogin=status;
   }
   get UserStatus() {
     return this.isLogin;
   }
   
   logout() 
   {
       this.isLogin=false;
       return true;
   }
   login(name,password) 
   {
	   
    for(let i of this.allowedUsers)
    {
      if(i.email==name)
        if(i.pass==password)
        {
          console.log('Correct Password');
          this.UserStatus=true;
          console.log(this.UserStatus);
          this.userRole=i.userRole;
          this.userName=i.name;
          //this.router.navigate(['/'+i.userRole]);
          return true;
        }
        else
        {
          this.error=('In correct Password');
          return false;
        }
      

    }
          this.error=('In correct Email');
      
   }
   SignUp(name,email,password,role)
  {
    for(let i of this.allowedUsers)
    {
      if(i.name==name)
      {
        this.error=(name+" already Exists");
        return false;
      }

    }

          this.allowedUsers.push({email:email,name:name,pass:password,userRole:role});
          localStorage.removeItem("users");
            localStorage.setItem("users", JSON.stringify(this.allowedUsers));
          console.log('Signed In',this.allowedUsers);
	    	  this.userRole=role;
         this.userName=name;
         this.UserStatus=true;
              return true;
          //this.router.navigate(['/'+role]);
     
    
      
  }
}
