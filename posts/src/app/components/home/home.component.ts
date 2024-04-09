import { Component } from '@angular/core';
import { AuthServiceService } from '../../core/services/Authentication/auth-service.service';
import { User } from '../model/User.modle';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user : User
constructor(private authService: AuthServiceService){
  this.user= authService.getuser()[0];
}

}
