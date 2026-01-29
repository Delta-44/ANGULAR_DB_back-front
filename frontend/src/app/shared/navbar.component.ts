import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TokenStorage } from '../core/auth/token.storage';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="border-b border-yellow/30 bg-black">
      <div class="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <a routerLink="/" class="font-bold text-yellow tracking-wider uppercase">DEMO APP</a>

        <div class="flex items-center gap-4">
          @if (logged()) {
            <span class="text-sm text-yellow/80">Usuario actual: <span class="font-medium text-yellow">{{ userEmail() }}</span></span>
            <button class="border border-yellow px-3 py-1.5 text-sm text-yellow hover:bg-yellow hover:text-black transition-colors font-medium" (click)="logout()">
              LOGOUT
            </button>
          } @else {
            <a routerLink="/login" class="border border-yellow px-3 py-1.5 text-sm text-yellow hover:bg-yellow hover:text-black transition-colors font-medium">LOGIN</a>
          }
        </div>
      </div>
    </div>
  `
})
export class NavbarComponent {
  private token = inject(TokenStorage);
  private auth = inject(AuthService);

  logged = computed(() => this.token.isLogged());
  userEmail = computed(() => this.token.getUserEmail() || 'Usuario');

  logout() {
    this.auth.logout();
    location.href = '/login';
  }
}
