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
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FilterPipe } from 'src/app/board/pipes/filter.pipe';
import { HighlightDirective } from 'src/app/board/directive/highlight.directive';

@NgModule({
  declarations: [
    ToolbarComponent,
    BoardComponent,
    CardListComponent,
    CardItemComponent,
    FilterPipe,
    HighlightDirective,
    BoardPageComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatCardModule

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
