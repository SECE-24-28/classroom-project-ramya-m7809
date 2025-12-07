import React from "react";
import { ContactStyle } from "./contact style.js";
import contactImg from "./contact.png.jpg"; // <-- your illustration image

export default function ContactSection() {
  return (
    <ContactStyle>
      <div className="left">
        <h1>GET IN TOUCH</h1>
        <p>
          Have questions or feedback? We're here to help. Send us a message and
          we'll respond soon.
        </p>
        <button>Contact Us</button>
      </div>

      <div className="right">
        <img src={contactImg} alt="contact" />
      </div>
    </ContactStyle>
  );
}