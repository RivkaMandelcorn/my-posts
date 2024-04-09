import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  async getUser(name:string,email:string): Promise <string[]>{
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(data)
    console.log(data.json)
    return [];
  }
}
