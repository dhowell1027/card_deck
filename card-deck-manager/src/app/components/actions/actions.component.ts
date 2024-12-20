import { Component } from '@angular/core';
import { CardDeckService } from 'src/app/services/card-deck.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css'],
})
export class ActionsComponent {
  constructor(private cardDeckService: CardDeckService) {}

  shuffle() {
    this.cardDeckService.shuffleDeck();
  }

  deal() {
    try {
      const cards = this.cardDeckService.dealCards(5);
      console.log('Dealt Cards:', cards);
    } catch (error) {
      alert(error);
    }
  }

  reset() {
    this.cardDeckService.resetDeck();
  }
}

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css'],
})

