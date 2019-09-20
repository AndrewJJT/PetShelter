import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private _http:HttpService, 
    private _route: ActivatedRoute,
    private _router: Router) { }

  newpet:any
  err:any
    
  ngOnInit() {
    this.newpet = {
      name: "",
      type:"",
      desc: "",
      skills:["","",""]
    }
  }

  addnewpet(){
    let newpetobv = this._http.addnewpet(this.newpet);
    newpetobv.subscribe(data => {

      if (data['message'] == "failed"){
        console.log(data);
        // console.log("errors",data)
        this.err = data['errors']
        this.ngOnInit()
      }
      else{
        this._router.navigate(['/pets'])
      }
    })
  }
}
