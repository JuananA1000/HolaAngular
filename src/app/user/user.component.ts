import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  userName = 'JuananA1000';

  // Si cambiamos el valor de esta variable, se renderiza o no el mensaje de bienvenida.
  isLoggedIn = true;
}
