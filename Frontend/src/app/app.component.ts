import { Component } from '@angular/core';
import { Company } from './domain/company';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  private companies: Company[] = new Array<Company>();

  public AppComponent() { }

}
