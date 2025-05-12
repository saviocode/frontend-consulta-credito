import { Component } from '@angular/core';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false

})
export class AppComponent {
  title = 'Consulta de Créditos';
  constructor(public loadingService: LoadingService) {}
}