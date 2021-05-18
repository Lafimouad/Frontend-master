import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivreryServiceService {

  constructor(private HttpClient:HttpClient ) { }
  getAll():Observable<any>
  {
    return this.HttpClient.get('http://localhost:8081/delivery_man')
  }
  addLivrery(form:any): Observable<any>
  {
   return this.HttpClient.post('http://localhost:8081/delivery_man',form.value)
  }
  updateLivrery(form:any): Observable<any>
  {
   return this.HttpClient.put('http://localhost:8081/delivery_man/',form)
  }
  deletelivrery(id:any):Observable<any>
  {
    return this.HttpClient.delete(`http://localhost:8081/delivery_man/${id}`)
  }

}
