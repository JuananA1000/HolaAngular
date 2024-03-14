import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios Arios</h3>
    <img
      src="https://i.pinimg.com/originals/01/e7/47/01e7475fbd172a32787fe653b7b7ff65.jpg"
      alt="this is fine"
    />
    <p>
      Lorem fistrum te voy a borrar el cerito eiusmod aute ad duis incididunt
      pecador sexuarl. Amatomaa sed adipisicing ad. Officia irure fistro
      condemor quis duis laboris sit amet enim apetecan. Qui minim reprehenderit
      pecador va usté muy cargadoo labore sexuarl a peich.
    </p>
  `,
  styles: `
  img{
    width: 100%;
    height: auto;
  }
  `,
})
export class CommentsComponent {}
