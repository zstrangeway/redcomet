export default class CardItem {
  text: String
  to: String
  color: String
  icon?: String

  constructor(text: string, to: string, color: String, icon?: string) {
      this.text = text;
      this.to = to;
      this.color = color;
      this.icon = icon;
  }
}
