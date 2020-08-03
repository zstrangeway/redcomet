<template>
  <v-form>
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
    <v-btn color="primary">
      Send Message
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue"

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
    }
  },
  methods: {
    sendMessage() {
      console.log("Send Message")
    },
  },
})
</script>

<style scoped></style>
