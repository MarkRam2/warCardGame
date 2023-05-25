import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { SharedDataService } from './shared-data-service.service';


@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient, private sharedData: SharedDataService) { }

  getDeck(): Observable<any> {
    return this.http.get<any>('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .pipe(
        tap((dataDeck) => {
          this.sharedData.setDeckData(dataDeck);
        })
      );
  }

  deckDraw(deckId: string): Observable<any> {
    return this.http.get<any>(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=26`).pipe(
      tap((dataSplit) => {
        console.log("fetch is called")
        this.sharedData.setSplitDeck(dataSplit);
      })
    );
  }

}

