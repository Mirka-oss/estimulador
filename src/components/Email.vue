<template>
<div>
  <h1>Enviar correos de agradecimientos</h1>
  <form class="contact-form" @submit.prevent="sendEmail">
    <label>De</label>
    <input type="text" name="from_name" />
    <label>Para</label>
    <input type="text" name="name" />
    <label>Email</label>
    <input type="text" name="email" />
    <label>mensaje</label>
    <textarea name="message"></textarea>
    <h1></h1>
    <input type="submit" value="Send" />
  </form>
</div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  methods: {
    sendEmail: e => {
      emailjs.sendForm(
        "gmail",
        "template_W54wfpWh",
        e.target,
        "user_eIvV8FEUFDKhjxaTBN7TF"
      );
    }
  }
};
</script>
