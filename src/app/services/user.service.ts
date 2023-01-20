import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../User';
import {Repo} from '../Repo'

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
  private apiUrl = 'https://gh-repos-backend.onrender.com/';
  // private apiUrl = 'http://localhost:4279/';

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<User> {
    httpOptions.params = new HttpParams({fromObject: {"username": username}});
    return this.http.get<User>(this.apiUrl + 'user', httpOptions);
  }

  getRepos(username: string): Observable<Repo[]> {
    httpOptions.params = new HttpParams({fromObject: {"username": username}});
    return this.http.get<Repo[]>(this.apiUrl + 'repos', httpOptions);
  }
}
