import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [RouterLink, FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export default class Registro {
  nombre = '';
  email = '';
  password = '';
  confirmar = '';

  onSubmit() {
    console.log('Registro:', this.nombre, this.email);
  }
}