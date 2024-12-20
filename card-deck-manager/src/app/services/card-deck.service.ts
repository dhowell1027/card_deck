import { Injectable } from '@angular/core';

export interface Card {
  suit: string;
  rank: string;
}

@Injectable({
  providedIn: 'root',
})
export class CardDeckService {
  private suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  private ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  private deck: Card[] = [];

  constructor() {
    this.resetDeck();
  }

  resetDeck() {
    this.deck = this.suits.flatMap((suit) =>
      this.ranks.map((rank) => ({ suit, rank }))
    );
  }

  shuffleDeck() {
    this.deck = [...this.deck].sort(() => Math.random() - 0.5);
  }

  dealCards(count: number): Card[] {
    if (count > this.deck.length) {
      throw new Error('Not enough cards left!');
    }
    const dealtCards = this.deck.slice(0, count);
    this.deck = this.deck.slice(count);
    return dealtCards;
  }

  getRemainingCards(): number {
    return this.deck.length;
  }
}
