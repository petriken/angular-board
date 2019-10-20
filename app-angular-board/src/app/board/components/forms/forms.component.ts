import { Component, OnInit, Input } from '@angular/core';
import User from '../../models/User';
import Card from '../../models/Card';
// import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})

export class FormsComponent implements OnInit {
  @Input() assignee: string;
  @Input() assignees: User[];
  @Input() card: Card;

  ngOnInit() {
    // this.itemForm.setValue(this.card.dueDate);

    console.log(this.card);
    // console.log(this.date);

  }

}
