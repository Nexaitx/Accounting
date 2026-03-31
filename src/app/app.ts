import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref,
    RouterModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Bookkeeping');

  closeNavbar() {
    const navbar = document.getElementById('ftco-nav');
    if (navbar && navbar.classList.contains('show')) {
      // Small timeout ensures the route change begins before the menu disappears
      setTimeout(() => {
        navbar.classList.remove('show');
      }, 100);
    }
  }
}
