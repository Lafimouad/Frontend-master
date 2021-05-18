import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class reclamationService {

  constructor(private HttpClient:HttpClient ) { }
  getAll():Observable<any>
  {
    return this.HttpClient.get('http://localhost:8081/reclamation')
  }
  addreclamation(form:any): Observable<any>
  {
   return this.HttpClient.post('http://localhost:8081/reclamation/',form.value)
  }
  updatereclamation(form:any): Observable<any>
  {
   return this.HttpClient.put('http://localhost:8081/reclamation/',form)
  }
  deletereclamation(id:any):Observable<any>
  {
    return this.HttpClient.delete(`http://localhost:8081/reclamation/${id}`)}
}
