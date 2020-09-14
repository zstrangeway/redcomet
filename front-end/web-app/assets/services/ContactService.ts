import axios, { AxiosResponse } from "axios"
import ContactData from "~/assets/models/ContactData.ts"

export default class ContactService {
  path = `${process.env.contactService}`

  async postContact(contactData: ContactData): Promise<AxiosResponse> {
    return axios.post(this.path, JSON.stringify(contactData))
  }
}
