
import React from "react";
import "./Contact.css";

const phoneNumber = "254758363148";

const socialLinks = [
  {
    name: "TikTok",
    symbol: "♪",
    description: "Outfit videos, new looks and fashion vibes.",
    joke: "Warning: unaweza view video moja ujipate ume-scroll for 30 minutes, juu stock ni moto moto 🔥😂",
    url: "https://www.tiktok.com/@ladyckcollections?_r=1&_t=ZS-9AeWueKuB9x",
    className: "contact-tiktok",
    action: "Watch our looks ↗",
  },
  {
    name: "Instagram",
    symbol: "◎",
    description: "More outfit photos, styling inspiration and details.",
    joke: "Ku-save outfit kwa collection ni sawa… but usisahau ku-order 😂",
    url: "https://www.instagram.com/ladyckcollections?rpxt=MWcyZGYzMzc4aTFz",
    className: "contact-instagram",
    action: "Explore Instagram ↗",
  },
  {
    name: "Facebook",
    symbol: "f",
    description: "Follow our page for updates and new arrivals.",
    joke: "Usiskie tumeleta new arrivals kutoka kwa jirani 😂 Follow us!",
    url: "https://www.facebook.com/share/1EmDjmbUDb/",
    className: "contact-facebook",
    action: "Visit Facebook ↗",
  },
];

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <span className="contact-eyebrow">
          LADIES & KIDS BOUTIQUE
        </span>

        <h1>
          Let's Talk <span>Fashion.</span>
        </h1>

        <p className="contact-intro">
          Seen an outfit you love? Need a price, size or colour?
          Tuko hapa kukusaidia! Whether ni yako ama for your little star,
          let's find your perfect look. ✨
        </p>

        <div className="contact-gold-line" />
      </section>

      <section className="contact-options">
        <article className="contact-card">
          <div className="contact-icon" aria-hidden="true">
            ☎
          </div>

          <span className="contact-card-label">GIVE US A CALL</span>

          <h2>Talk to us</h2>

          <a className="contact-phone" href="tel:+254758363148">
            0758 363 148
          </a>

          <p>
            Questions about an outfit? Tupigie 
            simu tukupange 😂.
          </p>

          <a
            className="contact-button contact-button-outline"
            href="tel:+254758363148"
          >
            Call Lady C K
          </a>
        </article>

        <article className="contact-card contact-whatsapp-card">
          <div className="contact-icon" aria-hidden="true">
            ✉
          </div>

          <span className="contact-card-label">QUICK MESSAGE</span>

          <h2>WhatsApp us</h2>

          <p>
            Ask about prices, available sizes, colours and delivery.
            Screenshot hiyo outfit and send it our way!
          </p>

          <a
            className="contact-button contact-button-gold"
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              "Hi Lady C K Collections! 👋 I would like to enquire about an outfit."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Message on WhatsApp ↗
          </a>

          <small>
            Outfit ikikubamba usiogope kuuliza bei 😂
          </small>
        </article>
      </section>

      <section className="contact-social-section">
        <div className="contact-section-heading">
          <span className="contact-eyebrow">STAY IN THE FASHION LOOP</span>

          <h2>
            Follow us for <span>more!</span>
          </h2>

          <p>
            Unataka kuona more items before deciding? 👀
            Visit our socials for more styles, outfit inspiration,
            new arrivals and future updates. Alafu usisahau kupiga like, kushare na kucomment kuhusu item imekubamba 😂🔥.

          </p>
        </div>

        <div className="contact-social-grid">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              className={`contact-social-card ${social.className}`}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit Lady C K Collections on ${social.name}`}
            >
              <span className="contact-social-symbol" aria-hidden="true">
                {social.symbol}
              </span>

              <h3>{social.name}</h3>

              <p>{social.description}</p>

              <p className="contact-social-joke">{social.joke}</p>

              <span className="contact-social-action">
                {social.action}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="contact-follow-banner">
        <span className="contact-eyebrow">A LITTLE FASHION REMINDER</span>

        <h2>
          Follow today. Slay tomorrow. ✨
        </h2>

        <p>
          Follow Lady C K Collections for fresh styles, new arrivals
          and updates. Usikuje kuuliza “na hiyo dress ilienda wapi?”
          after everyone else has seen it 😂.
        </p>

        <a
          className="contact-button contact-button-gold"
          href={socialLinks[1].url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow our fashion journey ↗
        </a>
      </section>

      <footer className="contact-footer">
        <p>
          <span>Lady C K Collections</span> — Fashion for Her,
          Style for Little Stars.
        </p>

        <p>Thank you for shopping with us. Karibu tena! 🖤</p>
      </footer>
    </main>
  );
}
