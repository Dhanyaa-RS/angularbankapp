import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//3rd execution
  //properties and methods/functions


  aim="Your perfect banking partner"

  account="Enter your Account number here"

  acno="";
  pswd="";



  userDetails: any={

    1000:{acno:1000,username:'dhanyaa',password:3000,balance:100},
    2000:{acno:2000,username:'dha',password:2000,balance:200},
    3000:{acno:3000,username:'dhan',password:3000,balance:300},

  }
  constructor() { }//1st constructor

  ngOnInit(): void {//2nd execution-lifecycle hooks of angular
    //initial process of component
  }




  //userdefined functions//4th execution
  
   acnoChange(event:any)
   {
   this.acno=(event.target.value);
   console.log(this.acno);
   }
   



   pswdChange(event:any)
   {
     this.pswd=(event.target.value);
   console.log(this.pswd);
   }




  login(){

  //   alert('login clicked');
  var acno=this.acno;
  var pswd=this.pswd;
  var userDetails=this.userDetails;
   
    if (acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        alert("login success");
      }else{

        alert("incorrect password");
      }

  }

     else{
       alert('user not found');

     }
  }
}
