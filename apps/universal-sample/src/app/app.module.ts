import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({appId:'universalSample'}),
    HttpClientModule,
    ScullyLibModule,
    RouterModule.forRoot(
      [
        { path: 'demo/:id', loadChildren: () => import('./demo/demo.module').then((m) => m.DemoModule) },
        { path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
        { path: 'user/:id', loadChildren: () => import('./user/user.module').then((m) => m.UserModule) },
      ],
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
