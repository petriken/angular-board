import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { ActivatedRoute } from '@angular/router';
import Card from '../../models/Card';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  public card: Card;

  constructor(private route: ActivatedRoute, private boardService: BoardService) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params[' name']);
    this.card = this.boardService.getTaskByName(this.route.snapshot.params[' name']);
    console.log('card', this.card);

  }

}
