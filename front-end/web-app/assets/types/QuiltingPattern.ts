export default class QuiltingPattern {
  id: string;
  name: string;
  imageUrl: string;
  costInCents: number;

  constructor(id: string, name: string, imageUrl: string, costInCents: number) {
    this.id = id
    this.name = name
    this.imageUrl = imageUrl
    this.costInCents = costInCents
  }
}
