import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  thepet:any;
  clicked = false;

  constructor( 
    private _http:HttpService, 
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.thepet ={}
    this._route.params.subscribe((params:Params) =>{
      this.getpet(params['id'])
    })
  }

  getpet(id:String){
    let selectedPetobv = this._http.getpet(id);
    selectedPetobv.subscribe(data => {
      console.log(data)
      this.thepet = data['pet'][0]
    })
  }

  deletepet(){
    let pettodeleteobv = this._http.deletepet(this.thepet._id);
    pettodeleteobv.subscribe(data => {
      this._router.navigate(['/pets'])
    })
  }

  addlikes(pet){
    let currentlikes = {likes: pet.likes}
    currentlikes.likes ++;
    let updatedpetobv = this._http.addlikes(pet._id, currentlikes)
    updatedpetobv.subscribe(data => {
      this.ngOnInit()
    })
  }
}
