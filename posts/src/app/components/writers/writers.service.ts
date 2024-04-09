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
  adress: Address;
  phone: string;
  website: string;
  company: Company;
}
interface Address {
  street: string;
  suit: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
interface Geo {
  lat: string;
  lng: string;
}
interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}