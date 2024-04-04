import { Component } from '@angular/core';
import { Writers, WritersService } from '../writers.service';
import {MatTableModule, MatRow, MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-writers',
  standalone: true,
  imports: [MatTableModule, MatRow, MatTable],
  templateUrl: './writers.component.html',
  styleUrl: './writers.component.css'
})
export class WritersComponent {
  Writers:Writers[] | undefined;
  columns = ["name"];
  dataSource = new MatTableDataSource<Writers>;
  constructor(private writersService:WritersService){  }
  async get(){
    var d = await this.writersService.getWriters();
    console.log(d);    
    this.Writers = d;
    this.dataSource = new MatTableDataSource<Writers>(this.Writers);
  }
}
