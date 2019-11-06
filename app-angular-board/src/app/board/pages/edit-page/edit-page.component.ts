import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { ActivatedRoute } from '@angular/router';
import Card from '../../models/Card';
import User from '../../models/User';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  public card: Card;
  public assignees: User[];

  constructor(private route: ActivatedRoute, private boardService: BoardService) { }

  ngOnInit() {
    this.assignees = this.boardService.getAssignee();
    this.card = this.boardService.getTaskByName(+this.route.snapshot.params.id);
  }

  onCancel() {
    this.boardService.onCancel();
  }

  public onEditTask() {
    this.boardService.onEditTask();
  }
}
