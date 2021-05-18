import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  constructor(private HttpClient:HttpClient ) { }
  getAll():Observable<any>
  {
    return this.HttpClient.get('http://localhost:8081/delivery')
  }
  addlivraison(form:any): Observable<any>
  {
   return this.HttpClient.post('http://localhost:8081/delivery',form.value)
  }
  updateLivraison(form:any): Observable<any>
  {
   return this.HttpClient.put('http://localhost:8081/delivery/',form)
  }
  deleteLivraison(id:any):Observable<any>
  {
    return this.HttpClient.delete(`http://localhost:8081/delivery/${id}`)}
}
