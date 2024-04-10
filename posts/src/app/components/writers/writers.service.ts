import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WritersService {

  constructor() { }

  async getWriters(): Promise<Array<Writers>> {
    var d = await fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json());
    return await d;
  }
  async getWriterById(id:number): Promise<Writers> {
    var d = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
      .then((response) => response.json());
    return await d;
  }

}
export interface Writers {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: Company;
}
interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}