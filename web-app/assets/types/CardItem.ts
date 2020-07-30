export default class CardItem {
    title: String;
    to: String;
    text: String
    icon: String

    constructor(title: string, text: string, to: string, icon: string) {
        this.title = title;
        this.text = text;
        this.to = to;
        this.icon = icon;
    }
}
