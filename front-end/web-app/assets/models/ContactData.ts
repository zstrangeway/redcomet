export default class ContactData {
  email: string
  name: string
  subject: string
  message: string

  constructor(email: string, name: string, subject: string, message: string) {
    this.email = email
    this.name = name
    this.subject = subject
    this.message = message
  }
}
