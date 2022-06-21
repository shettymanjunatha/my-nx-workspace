import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';

import { authRoutes, AuthModule, AuthGuard } from '@my-workspace/auth';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Added
import { LayoutModule } from '@my-workspace/layout';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: 'products' },
        { path: 'auth', children: authRoutes },
        {
          path: 'products',
          loadChildren: () =>
            import('@my-workspace/products').then(
              (module) => module.ProductsModule
            ),
          canActivate: [AuthGuard],      // added
        },
      ],
      {
       // initialNavigation: 'enabled',
      }
    ),
    AuthModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
