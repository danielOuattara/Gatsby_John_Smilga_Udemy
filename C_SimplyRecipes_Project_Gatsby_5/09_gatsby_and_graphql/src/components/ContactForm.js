import * as React from "react";

export default function ContactForm() {
  return (
    <form className="form contact-form">
      <div className="form-row">
        <label htmlFor="name"> name</label>
        <input type="text" name="name" id="name" />
      </div>

      <div className="form-row">
        <label htmlFor="email"> email</label>
        <input type="text" name="email" id="email" />
      </div>

      <div className="form-row">
        <label htmlFor="message"> message</label>
        <textarea name="message" id="message"></textarea>
      </div>

      <button type="submit" className="btn block">
        send
      </button>
    </form>
  );
}
