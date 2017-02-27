import { Component } from '@angular/core';
import { MovieService } from './services/movies.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MovieService],
})
export class AppComponent {
  title = 'app works!';
}
