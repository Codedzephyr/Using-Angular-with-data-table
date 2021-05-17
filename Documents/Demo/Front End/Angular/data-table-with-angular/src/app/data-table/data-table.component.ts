import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
user:any;
  constructor(private http: HttpClient) 
  {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(user =>{
      this.user = user;
  
      setTimeout(() => {
        $('#datatableexample').DataTable({
          pagingType: 'full_numbers',
          pageLength: 5,
          processing: true,
          lengthMenu: [5,10,15,25]
        })
      },1);
    },error => console.error(error)); 
   }

  ngOnInit(): void {
  }

}
