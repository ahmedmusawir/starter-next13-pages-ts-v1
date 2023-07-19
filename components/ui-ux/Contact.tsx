import { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current !== null) {
      emailjs
        .sendForm(
          "service_yfdtacg", // SERVICE ID
          "template_r7i0nqw", // TEMPLATE ID
          form.current,
          "WGdP1_0dhm0s_-PSD" // PUBLIC KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default Contact;
