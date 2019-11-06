import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'board-page', pathMatch: 'full' },
  {
    path: 'board-page', loadChildren: './board/board.module#BoardModule',
    canLoad: [AuthGuard]
  },
  { path: 'login-page', loadChildren: './auth/auth.module#AuthModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
