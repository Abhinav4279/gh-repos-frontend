import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  params: new HttpParams()
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000/';

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<User> {
    console.log(username);
    httpOptions.params = new HttpParams({fromObject: {"username": username}});
    return this.http.get<User>(this.apiUrl + 'user', httpOptions);
  }

  //TODO: unsub
  
  // getRepos(): Observable<User> {
  //   return this.http.get<User[]>(this.apiUrl);
  // }
}