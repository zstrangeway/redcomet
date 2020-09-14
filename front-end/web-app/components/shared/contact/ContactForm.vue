<template>
  <v-form ref="form">
    <v-text-field
      v-model="name"
      counter="20"
      :rules="nameRules"
      label="Name"
      required
    />
    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required />
    <v-text-field v-model="subject" label="Subject" required />
    <v-textarea
      v-model="message"
      :rules="messageRules"
      counter="500"
      label="Message"
      required
    />
    <v-btn color="primary" :loading="submitLoading" @click="submitClicked">
      Send Message
    </v-btn>

    <v-snackbar v-model="snackbar">
      {{ snackbarMessage }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue"
import ContactService from "~/assets/services/ContactService.ts"
import ContactData from "~/assets/models/ContactData.ts"

export default Vue.extend({
  data() {
    return {
      name: "",
      nameRules: [
        (v: string) => !!v || "Name is required",
        (v: string) =>
          (v && v.length <= 20) || "Name must be less than 20 characters",
      ],
      email: "",
      emailRules: [
        (v: string) => !!v || "E-mail is required",
        (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      subject: "",
      message: "",
      messageRules: [
        (v: string) => !!v || "Message is required",
        (v: string) =>
          (v && v.length <= 500) || "Message must be less than 500 characters",
      ],
      snackbar: false,
      snackbarMessage: "",
      submitLoading: false,
    }
  },
  computed: {
    form(): VForm {
      return this.$refs.form as VForm
    },
  },
  methods: {
    async submitClicked() {
      this.submitLoading = true
      this.form.validate()
      // TODO: prevent form submission if not valid
      await this.sendMessage()
      this.snackbar = true
      this.submitLoading = false
    },
    async sendMessage() {
      const contactService = new ContactService()
      const contactData = new ContactData(
        this.email,
        this.name,
        this.subject,
        this.message
      )

      const res = await contactService.postContact(contactData)
      console.log(res)

      if (res.status == 200) {
        this.form.reset()
        this.snackbarMessage =
          "Thanks for contacting us! We've recieved your message and will get back to you as soon as we are able."
      } else {
        this.snackbarMessage = res.data.error
      }
    },
  },
})
</script>

<style scoped></style>
