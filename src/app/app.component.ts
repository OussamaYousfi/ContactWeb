import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ContactWeb';
  contact = {nom : "Oussama", email: "oussama.yousfi@esprit.tn"};
}
