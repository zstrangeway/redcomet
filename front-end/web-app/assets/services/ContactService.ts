import axios from "axios"
import ContactData from "~/assets/types/ContactData"

export default class ContactService {
  path: string = `${process.env.contactService}`

  async postContact(contactData: ContactData): Promise<Response> {
    return axios.post(this.path, JSON.stringify(contactData))
  }
}
