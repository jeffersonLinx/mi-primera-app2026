import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// importar componente de eenrutamiento
@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
