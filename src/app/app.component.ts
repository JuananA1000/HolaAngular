import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Yo soy un componente en línea</h1>
    <h2>con estilos CSS también en línea</h2>
  `,
  styles: `
  h1, h2{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #e00202;
  }
  `,
})
export class AppComponent {
  title = 'HolaAngular';
}
