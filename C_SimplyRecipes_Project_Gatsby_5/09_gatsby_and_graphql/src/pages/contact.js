import React from "react";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Stay in Touch ?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus iste dolorem id maxime quidem vitae
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              quaerat, est placeat quibusdam distinctio repellat nobis assumenda
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            </p>
          </article>
          <article>
            <ContactForm />
          </article>
        </section>
      </main>
    </Layout>
  );
}

export default Contact;
