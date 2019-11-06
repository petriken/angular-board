import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import User from '../../models/User';
import Card from '../../models/Card';
import CardList from '../../models/CardList';
import { MatSelectChange } from '@angular/material/select';

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

  public fullAssigneeName = '';

  @Input() assignees?: User[];
  @Input() card?: Card;
  @Input() cards: CardList;
  @Output() public cancel = new EventEmitter<Event>();
  @Output() public save = new EventEmitter<any>();

  ngOnInit() {
    if (!this.card) {
      this.card = {
        name: '',
        description: '',
        isClicked: false,
        assignee: {
          id: '',
          firstName: '',
          lastName: ''
        },
        dueDate: ''
      };
    } else {
      this.fullAssigneeName = `${this.card.assignee.firstName} ${this.card.assignee.lastName}`;
    }
  }

  onCancel() {
    this.cancel.emit();
  }

  handleChange(event: MatSelectChange) {
    const id = event.value;
    if (id) {
      this.assignees.map(value => {
        if (value.id === id) {
          this.card.assignee.firstName = value.firstName;
          this.card.assignee.lastName = value.lastName;
          this.card.assignee.id = id;
        }
      });
    }
  }

  onSaveTask() {
    this.save.emit(this.card);
  }
}
