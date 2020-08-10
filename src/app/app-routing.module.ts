import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './main/content/pages/authentication/login/login.component';
import { BoardComponent } from './main/content/apps/board/list-board/board.component';
import { Page404Component } from './main/content/apps/page404/page404.component';
import { RegisterComponent } from './main/content/apps/user/register/register/register.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'board/list-board', component: BoardComponent },
  { path: 'user/register', component: RegisterComponent},
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
