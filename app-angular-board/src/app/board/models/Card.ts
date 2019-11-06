import User from './User';

export default interface Card {
  id?: string | number;
  name: string;
  description: string;
  dueDate?: Date | string | number;
  assignee?: User;
  isClicked?: boolean;
}
