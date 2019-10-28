import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginHomeComponent } from './login-home.component';

export const loginBoxRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LoginHomeComponent],
  exports: [LoginHomeComponent]
})
export class LoginBoxModule {}
