import { Injectable } from '@angular/core';
import { Writers } from '../writers/writers.service';
import { User } from '../model/User.modle';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  async getUser(userId: number): Promise<User> {
    var data = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json());
    var filteredData = data.filter((user: any) => user.id === userId);    
    return filteredData;
  }
}
