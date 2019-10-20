import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';

import { BoardComponent } from './components/board/board.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BoardPageComponent } from './pages/board-page/board-page.component';

import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { FilterPipe } from 'src/app/board/pipes/filter.pipe';
import { HighlightDirective } from 'src/app/board/directive/highlight.directive';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { FormsComponent } from './components/forms/forms.component';
import { MatNativeDateModule } from '@angular/material/core';
import { EditPageComponent } from './pages/edit-page/edit-page.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    BoardComponent,
    CardListComponent,
    CardItemComponent,
    FilterPipe,
    HighlightDirective,
    BoardPageComponent,
    CreatePageComponent,
    FormsComponent,
    EditPageComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    ToolbarComponent,
    BoardComponent,
    CardListComponent,
    CardItemComponent,
    BoardPageComponent
  ],

})
export class BoardModule { }
