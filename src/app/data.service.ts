import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { IUser } from './home/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  userData$ = new BehaviorSubject(null)

  getData(): Observable<IUser[]>{
    return this.http.get<IUser[]>(environment.jsonPlaceholderUrl + '/users')
    .pipe(
      map(user => {
        for (const obj of user) {
          let img = environment.monsterProfileImgUrl + obj["id"] + "?set=set2&size=180x180";
          obj.img = img;
        }
        return user;
      }),
      catchError(err => {
        return throwError(err.message);
      })
    );
  }
  
  getUserData(){
    return this.userData$.asObservable();
  }

  setUserData(user:any){
    return this.userData$.next(user);
  }

}
