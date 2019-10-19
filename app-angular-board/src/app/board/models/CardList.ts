import Card from './Card';

export default interface CardList {
  id: number;
  name: string;
  cards: Card[];
  isDoneSection: boolean;
}
