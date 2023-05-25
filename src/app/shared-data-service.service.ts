import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  deckData: any;
  dataSplit: any;
  sharedDataService: any;

  constructor() { }

  setDeckData(data: any): void {
    this.deckData = data;
    console.log(this.deckData.deck_id)
  }
  getDeckData(): any {
    return this.deckData;
  }

  setSplitDeck(data: any): void{
    this.dataSplit = data;
    console.log(this.dataSplit)
  }
  getSplitDeck(): any {
    return this.dataSplit;
  }
}