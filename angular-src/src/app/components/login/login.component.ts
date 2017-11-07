import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;


  constructor(
    private authService:AuthService,
    private router:Router
  ) {}

  ngOnInit() {}

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticatUser(user).subscribe(data => {
      if(data.success){
        window.alert('WELCOME 🎊')
        this.authService.storeUseData(data.token, data.user);
        this.router.navigate(['dashboard'])
      }else{
        window.alert("Invalid Credentials ☠️ ")
        this.router.navigate(['login'])
      }
    })
  }
}
