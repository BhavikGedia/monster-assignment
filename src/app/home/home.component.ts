import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { fromEvent, Observable, of, Subscription } from 'rxjs';

import { debounceTime, map, startWith, tap, distinctUntilChanged } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';
import { IUser } from './user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  error:any = null;
  users:IUser[] = [];
  filteredOptions:FormControl = new FormControl();
  subscription = new Subscription(); 
  tmpData:IUser[] = [];
  @ViewChild('search', { static: true }) searchInput!: ElementRef;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getUserData();
  }

  ngAfterViewInit(){
    this.onKeyUpforSearch();
  }

  onHandleError() {
    this.error = null;
  }

  onClick(user: IUser){
    this.dataService.setUserData(user);
    this.router.navigate(['details', user.id]);
  }

  onAddUser(){
    this.router.navigate(['details', 'add']);
  }

  getUserData(){
    this.subscription.add(
      this.dataService.getData().subscribe((users) => {
        // this.users = [];
        this.users = users;
        this.tmpData = users;
        this.error = null;
      },err => {
        this.error = err;
      })
    );
  }

  onKeyUpforSearch(){
    this.subscription.add(
      fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        map((event:any) => (event.target as HTMLInputElement).value ),
        debounceTime(700),
        distinctUntilChanged(),
        // tap(str => console.log(str)),
        map(str => str ? this.filterData(str) : this.tmpData.slice())
      ).subscribe(users => {
        this.users = users;
      })
    );
  }

  filterData(searchStr:string): IUser[]{
    const filterValue = searchStr ? searchStr.toLowerCase() : '';
    return this.tmpData.filter(d => (d.name && d.name.toLowerCase().indexOf(filterValue) > -1));
  }

  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe();
  }
}
