import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data-service.service';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-challenge-area',
  templateUrl: './challenge-area.component.html',
  styleUrls: ['./challenge-area.component.css']
})

export class ChallengeAreaComponent implements OnInit{

  deckData: any;
  halfDeck: any;
  apiService: any;

  constructor(private sharedData: SharedDataService, deckDraw: FetchService) { }

  ngOnInit() {
    this.deckData = this.sharedData.getDeckData();
    this.halfDeck = this.sharedData.getSplitDeck();
  }

  deckId!: string;
  deckSplitCards!: string;

  splitDeck(): void {
    this.deckId = this.sharedData.getDeckData().deckId;
    console.log(this.halfDeck);
  }
  
  deckDraw(deckId: string): void {
    this.apiService.drawCard(deckId).subscribe(
      (response: { dataSplit: string; }) => {
        this.deckSplitCards = response.dataSplit;
      }
    );
  }
}

