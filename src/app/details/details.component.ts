import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { IUser } from '../home/user.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  user:any;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) {
    
  }
  
  ngOnInit(): void {
    this.dataService.getUserData().subscribe(res => {
      this.user = res;
    })
  }
  onClickBack(){
    this.router.navigate(['/home']);
  }

}
