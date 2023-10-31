import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']); // Navigate to the root URL (usually your home page)

  }
}
