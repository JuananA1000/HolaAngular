import { Component, EventEmitter, Input, Output } from '@angular/core';
/*
  Vamos a ver ahora cómo se realiza la comunicación de HIJOS a PADRES. En React, esto se hace con un callback pero, en 
  Angular, la cosa cambia...
*/

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h3>Juegos de {{ userName }}</h3>
    <ul>
      @for (game of games; track game.id) {
      <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class GamesComponent {
  @Input() userName = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
    {
      id: 1,
      name: 'Tekken 7',
    },
    {
      id: 2,
      name: 'Need For Speed: Most Wanted',
    },
    {
      id: 3,
      name: 'SSX: On Tour',
    },
    {
      id: 4,
      name: 'Rayman 2',
    },
  ];
}
