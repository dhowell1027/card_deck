import { Component, OnInit } from '@angular/core';
import { CardDeckService, Card } from 'src/app/services/card-deck.service';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css'],
})
export class CardGridComponent implements OnInit {
  cards: Card[] = [];

  constructor(private cardDeckService: CardDeckService) {}

  ngOnInit() {
    this.cards = []; // Initialize with no dealt cards
  }

  updateDealtCards(newCards: Card[]) {
    this.cards = [...this.cards, ...newCards];
  }
}

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css'],
})
