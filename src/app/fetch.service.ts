import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private _http:HttpClient) { }

  getdata(){
    return this._http.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  }
}
