import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  user:any

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getUserData().subscribe(res => {
      this.user = res;
    })
  }

}
