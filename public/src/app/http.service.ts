import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  getallpets(){
    return this._http.get('/pets')
  }

  getpet(id:String){
    return this._http.get('/pets/'+ id)
  }

  addnewpet(newpet){
    return this._http.post('/pets', newpet);  
  }

  editpet(id:String, updatedpet){
    return this._http.put('/pets/' + id, updatedpet);
  }

  deletepet(id:String){
    return this._http.delete('/pets/' + id)
  }

  addlikes(id:String, newlikes){
    return this._http.put('/petslikes/' + id, newlikes)
  }
}
