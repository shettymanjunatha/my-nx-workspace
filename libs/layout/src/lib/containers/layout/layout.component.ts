import { AuthService } from '@my-workspace/auth';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from '@my-workspace/data-models';
import { Router } from '@angular/router';

@Component({
  selector: 'my-workspace-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  user$?: Observable<User | null> ;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.user$ = this.authService.user$;
  }

  logout(): void {
    this.authService.logout();
    if(!!(this.user$))
    {
      this.router.navigate([`/auth/login`]);

    }

  }
}
