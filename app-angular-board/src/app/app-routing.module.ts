import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
import { BoardPageComponent } from './board/pages/board-page/board-page.component';
import { BoardComponent } from './board/components/board/board.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: BoardPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'board-page', component: BoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
