export class Book {
  constructor(
    public isbn: string,
    public title: string,
    public description: string,
    public rating: number
  ) {
    this.rating = 0;
  }
}
