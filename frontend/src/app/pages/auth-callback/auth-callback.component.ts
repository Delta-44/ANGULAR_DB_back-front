import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-callback',
  standalone: true,
  template: ''
})
export class AuthCallbackComponent {
  private route = inject(ActivatedRoute);
  private auth = inject(AuthService);
  private router = inject(Router);

  constructor() {
    const token = this.route.snapshot.queryParamMap.get('token');
    if (token) {
      this.auth.saveToken(token);
    }
    this.router.navigate(['/']);
  }
}
