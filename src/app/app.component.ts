import { Component } from '@angular/core';
import { FetchService } from './fetch.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'warCardGame';
  newdata:any;
    constructor(private _apiservie:FetchService){}
    ngOnInit(){
      this._apiservie.getdata().subscribe(res=>{
        this.newdata=res;
      })
    }
  
}
