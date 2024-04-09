import { Component, OnInit } from '@angular/core';
import { Writers, WritersService } from '../writers.service';
import { MatTableModule, MatRow, MatTable, MatTableDataSource } from '@angular/material/table';
import { ViewTableComponent } from '../../../core/customComponents/view-table/view-table.component';


@Component({
  selector: 'app-writers',
  standalone: true,
  imports: [MatTableModule, MatRow, MatTable, ViewTableComponent],
  templateUrl: './writers.component.html',
  styleUrl: './writers.component.css'
})
export class WritersComponent implements OnInit {
  data: any[] = [];
  columns = ['name', 'email'];
  header="Writers";

  constructor(private writersService: WritersService) { }

  async ngOnInit(): Promise<void> {
    await this.writersService.getWriters().then((dat: Array<any>) => {
      this.data = dat;
    }
    ).catch(err =>  this.data=[]
    );
  }

}
