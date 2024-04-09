import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { AuthServiceService } from '../../core/services/Authentication/auth-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,MatDividerModule,RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  isLoggedIn : boolean
constructor(private authService: AuthServiceService){
  this.authService.isLoggedIn.subscribe((value: boolean) => {
   this.isLoggedIn = value;
  });
}
}
