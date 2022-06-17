import { AuthService } from '@my-workspace/auth';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from '@my-workspace/data-models';

@Component({
  selector: 'my-workspace-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  user$?: Observable<User | null> ;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user$ = this.authService.user$;
  }
}
