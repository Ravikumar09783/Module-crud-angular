import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http : HttpClient,
  ) { }
  apiUrl = 'http://localhost:3000/login';

  setRegister(data:string){
    this.http.post<any>(this.apiUrl,data)

  }

  getLogin(){
    this.http.get<any>(this.apiUrl)
  }
}

