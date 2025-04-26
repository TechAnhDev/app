import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '~/enviriment/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  loginUrl = environment.loginUrl + 'login/';
  constructor(private _http: HttpClient) {}

  login(data: any) {
    return this._http.post(this.loginUrl, {
      username: data.username,
      password: data.password,
    });
  }
}
