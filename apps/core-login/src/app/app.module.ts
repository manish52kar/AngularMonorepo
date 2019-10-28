import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginBoxModule, loginBoxRoutes } from '@authLogin/login-box';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LoginBoxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
