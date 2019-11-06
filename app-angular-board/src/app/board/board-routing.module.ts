import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardPageComponent } from './pages/board-page/board-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';


const routes: Routes = [
  { path: '', component: BoardPageComponent },
  { path: 'create-page', component: CreatePageComponent },
  { path: 'edit-page/:id', component: EditPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
