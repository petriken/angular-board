import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import User from '../../models/User';
import Card from '../../models/Card';
import CardList from '../../models/CardList';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})

export class FormsComponent implements OnInit {
  public name: string;
  public description: string;
  public human: string;
  public date: Date;
  public assignee: User;
  // private newCard: boolean;

  @Input() assignees?: CardList;
  @Input() card?: Card;
  @Input() cards: CardList;
  @Output() public cancel = new EventEmitter<Event>();
  @Output() public save = new EventEmitter<any>();

  ngOnInit() {
    if (!this.card) {
      // this.newCard = true;
      this.card = {
        name: '',
        description: '',
        isClicked: false,
        assignee: {
          id: '',
          firstName: '',
          lastName: '',
        },
        dueDate: ''
      };
    }
  }

  onCancel() {
    this.cancel.emit();
  }

  onSaveTask() {
    console.log('card', this.card);

    // if (this.newCard) {

    // this.save.emit({
    //   name: this.card.name,
    //   description: this.description,
    //   assignee: {
    //     // id: this.assignee.id,
    //     // firstName: this.assignee.firstName,
    //     // lastName: this.assignee.lastName
    //     id: this.human.split(' ')[1].slice(0, 3),
    //     firstName: this.human.split(' ')[0],
    //     lastName: this.human.split(' ')[1]
    //   },
    //   dueDate: this.card.dueDate
    // });
    // }
    // else {
    this.save.emit(this.card
    );
    // }
  }
}
