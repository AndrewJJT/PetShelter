import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { all } from 'q';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _http:HttpService) { }

  allpets:any

  ngOnInit() {
    this.getallpets()
  }

  getallpets(){
    let allpetsobv = this._http.getallpets();
    allpetsobv.subscribe(data => {
      console.log(data)
      this.allpets = data['allPets']
    })
  }

}
