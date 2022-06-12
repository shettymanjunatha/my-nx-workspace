import { AuthService } from './../../services/auth/auth.service';
import { Authenticate } from '@my-workspace/data-models';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-workspace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  login(authenticate: Authenticate): void {
    this.authService.login(authenticate).subscribe();
  }
}
