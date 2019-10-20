import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
import { BoardPageComponent } from './board/pages/board-page/board-page.component';
import { BoardComponent } from './board/components/board/board.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { CreatePageComponent } from './board/pages/create-page/create-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'board-page', pathMatch: 'full' },
  // { path: 'create-page', component: CreatePageComponent },
  // { path: 'board-page', component: BoardComponent }

  {
    path: 'board-page', loadChildren: './board/board.module#BoardModule',
    canLoad: [AuthGuard],
  },
  { path: 'login-page', loadChildren: './auth/auth.module#AuthModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
