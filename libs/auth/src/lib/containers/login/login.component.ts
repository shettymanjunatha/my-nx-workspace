import { AuthService } from './../../services/auth/auth.service';
import { Authenticate } from '@my-workspace/data-models';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-workspace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  login(authenticate: Authenticate): void {
    console.log("")
    this.authService.login(authenticate).subscribe((val: any)=>{
      this.router.navigate([`/products`]);
    });
  }


}
