import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

jeton: any;
requete: any;

constructor(private httpclient:HttpClient) { }

  
  register(user: any):Observable<any>{
    return this.httpclient.post<any[]>('http://localhost:8000/api/register',user);

  }
  getToken():Observable<any>{
    this.jeton=localStorage.getItem('token');
    return this.jeton;
  }
  
  login(user: any):Observable<any>{
    
    return this.httpclient.post<any[]>('http://localhost:8000/api/login',user);
  }
  
  getAllContacts():Observable<any>{
    const headers= new HttpHeaders().set('Authorization',`Bearer ${this.getToken()}`)
    return this.httpclient.get<any[]>('http://localhost:8000/api/contacts',{headers});
  }
}