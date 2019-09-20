import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(    
    private _http:HttpService, 
    private _route: ActivatedRoute,
    private _router: Router) { }

  thepet:any;

  ngOnInit() {

    this._route.params.subscribe((params:Params) => {
    this.getpet(params['id']);
    })
  }

  getpet(id:String){
    let selectedauthorobv = this._http.getpet(id);
    selectedauthorobv.subscribe (data => {
      console.log(data)
      this.thepet = data['pet'][0];
    })
  }

  updatepet(pet){
    let updatedpetobv = this._http.editpet(pet._id,pet);
    updatedpetobv.subscribe(data => {
      if (data['message'] == 'success'){
        this._router.navigate(['/pets', this.thepet._id])
      }
    })
  }
}
