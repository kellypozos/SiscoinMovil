import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(data: any) {
    return this.http.post(`${environment.url}register-movil`, data);
  }

  login(data: any) {
    return this.http.post(`${environment.url}login-movil`,data);
  }
}
