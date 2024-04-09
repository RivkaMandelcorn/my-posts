import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { LoginService } from '../login.service';
import { Writers } from '../../writers/writers.service';
import { User } from '../../model/User.modle';
import { AuthServiceService } from '../../../core/services/Authentication/auth-service.service';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatProgressSpinnerModule,MatCardModule,FormsModule,MatFormFieldModule,MatInputModule,MatIconModule,MatButtonModule,MatDividerModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = new FormGroup({
    id: new FormControl('', Validators.required),
  });
  user: Promise<User> | null;
  id!: number
  spiner : boolean = false;
  constructor(private login:LoginService, private authService: AuthServiceService, private router:Router){
    this.user = null;
  }
  navigate() {
    this.spiner = true;
    this.id = this.loginForm.controls.id.value ? parseInt(this.loginForm.controls.id.value) : 0;
    this.authService.login(this.id).then(data=>{
      if(data){
        let profile = (data as User);
        this.authService.setLoggedIn = true;
        this.spiner = false;
        this.router.navigate(['/home']);
      }
    },
    error=>{
        alert("erroe")
    }    
  )
    }
  }

