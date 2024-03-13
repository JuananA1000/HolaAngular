import { Component } from '@angular/core';
/*
  Para utilizar este componente. IMPORTANTE:
    1. Nos dirigimos al componente dentro del cual queremos utilizarlo. En este caso, USER.component.ts.
    2. Importamos el componente en cuestión y lo añadimos a los 'imports' en @Component
    3. Lo renderizamos en USER.component.html con <app-games>

    NOTA: las etiquetas html en Angular, pueden tener etiqueta de cierre o AUTOCERRARSE, Como en ReactJS
*/

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <ul>
      @for (game of games; track game.id) {
      <li>{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class GamesComponent {
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
