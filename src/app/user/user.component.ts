import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  userName = 'JuananA1000';

  // Si cambiamos el valor de esta variable, se renderiza o no el mensaje de bienvenida.
  isLoggedIn = true;
}
