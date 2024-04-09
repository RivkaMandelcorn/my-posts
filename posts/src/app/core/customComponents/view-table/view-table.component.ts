import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-table',
  standalone: true,
  imports: [MatTableModule,MatProgressSpinnerModule],
  templateUrl: './view-table.component.html',
  styleUrl: './view-table.component.css'
})
export class ViewTableComponent implements OnInit {
  
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>;

  @Input()
  set data(value: Array<any>) {
    this.dataSource = new MatTableDataSource<any>(value);
    console.log(this.dataSource.data.length);
  }
  @Input() columns: string[] = [];
  @Input() header: string = "";

  constructor(private route: ActivatedRoute,  private router: Router){}

  ngOnInit(): void {
    console.log(this.dataSource.data.length);
  }

  goToPosts(id:string){
    this.router.navigate(['/posts/'+id]);
  }
}