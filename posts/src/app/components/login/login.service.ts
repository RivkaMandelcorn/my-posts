import { Injectable } from '@angular/core';
import { Writers } from '../writers/writers.service';
import { User } from '../model/User.modle';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  async getUser(userId: number): Promise<User> {
    var data = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json());
    var filteredData = data.filter((user: any) => user.id === userId);    
    return filteredData;
  }
}
