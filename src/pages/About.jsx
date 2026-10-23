
import React from "react";
import "./About.css";
import logo from "../assets/images/logo.jpg";
import shoesImage from "../assets/images/shoes-02.jpg";
import kidsImage from "../assets/images/kids-01.jpg";
import innerwearImage from "../assets/images/innerwears.jpg";
import handbagImage from "../assets/images/handbag-01.jpg";
import dressImage from "../assets/images/dresses-01.jpg";
import jeansImage from "../assets/images/jeans-01.jpg";
import gymwearImage from "../assets/images/gymwear-03.jpg";
import swimmingcostumeImage from "../assets/images/swimmingcostume-01.jpg";

const categories = [
  {
    title: "Dresses",
    description:
      "Elegant dresses for everyday wear, celebrations and special occasions.",
    image:
      dressImage,
  },
  {
    title: "Jeans & Casual Wear",
    description:
      "Comfortable jeans and casual outfits for everyday style.",
    image:
      jeansImage,
  },
  {
    title: "Gymwear & Sweatpants",
    description:
      "Comfortable activewear for workouts and relaxed lifestyles.",
    image:
      gymwearImage,
  },
  {
    title: "Handbags",
    description:
      "Stylish handbags to complement your outfit for every occasion.",
    image:
      handbagImage,
  },
  {
    title: "Shoes",
    description:
      "Fashionable footwear to complete your look.",
    image: shoesImage,
  },
  {
    title: "Kids' Wear",
    description:
      "Fashionable and comfortable outfits for your little stars.",
    image: kidsImage,
  },
  {
    title: "Innerwear & Essentials",
    description:
      "Innerwears designed for comfort and confidence.",
    image: innerwearImage,
  },
  {
    title: "Swimming Costumes",
    description:
      "Swimwear for ladies and kids, holidays and leisure.",
    image:
      swimmingcostumeImage,
  },
];

export default function About() {
  return (
    <main className="about-page" id="about">
      <section className="about-hero">
        <div className="about-logo">
          <img src={logo} alt="Lady CK Collections logo" />
        </div>

        <p className="about-eyebrow">
          FASHION FOR HER · STYLE FOR LITTLE STARS
        </p>

        <h1>
          About <span>Lady CK</span> Collections
        </h1>

        <p className="about-intro">
          Your destination for trendy, classy and affordable
          fashion. From elegant looks for every woman to adorable
          styles for every child, we help you find outfits that
          express your personality and make every occasion special.
        </p>
      </section>

      <section className="about-section">
        <p className="section-label">OUR COLLECTIONS</p>

        <h2>Fashion for Her, Style for Little Stars</h2>

        <p className="section-description">
          Explore clothing, handbags, footwear and fashion
          essentials for ladies and kids. Whether you're dressing
          up for a special occasion or finding an everyday favourite,
          there's a style waiting for you.
        </p>

        <div className="about-categories">
          {categories.map((item) => (
            <article
              className="about-category"
              key={item.title}
            >
              <div className="category-image">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
              </div>

              <div className="category-content">
                <span className="category-mark">✦</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section about-delivery">
        <p className="section-label">
          SHOP WITH CONFIDENCE
        </p>

        <h2>From Our Store to Your Door</h2>

        <div className="delivery-grid">
          <article>
            <span className="delivery-icon">01</span>
            <h3>Explore Our Styles</h3>
            <p>
              Browse our collections and discover clothing
              and accessories that match your style.
            </p>
          </article>

          <article>
            <span className="delivery-icon">02</span>
            <h3>Place Your Order</h3>
            <p>
              Contact us to confirm available items, sizes,
              colours, prices and ordering arrangements.
            </p>
          </article>

          <article>
            <span className="delivery-icon">03</span>
            <h3>Countrywide Delivery</h3>
            <p>
              We offer countrywide delivery across Kenya.
              Contact us to confirm delivery charges, options
              and estimated arrival times.
            </p>
          </article>
        </div>
      </section>

      <section className="about-section about-location">
        <div className="location-details">
          <p className="section-label">VISIT OUR STORE</p>

          <h2>Find Us in Ruiru</h2>

          <p>
            Visit Lady CK Collections in person to explore
            our fashion collections and find styles you love.
          </p>

          <div className="location-card">
            <span className="location-symbol">⌖</span>

            <div>
              <h3>Our Location</h3>
              <p>
                Timezone Lifestyle Hub Mall,
                <br />
                1st Floor, Room 16,
                <br />
                Ruiru, along Githunguri Road, Kenya.
              </p>
            </div>
          </div>

          <a
            className="map-button"
            href="https://www.google.com/maps/search/?api=1&query=Timezone+Lifestyle+Hub+Mall+Room+16+Ruiru+Githunguri+Road+Kenya"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions ↗
          </a>
        </div>

        <div className="map-container">
          <iframe
            title="Find Lady CK Collections in Ruiru"
            src="https://maps.google.com/maps?q=Timezone%20Lifestyle%20Hub%20Mall%2C%20Ruiru%2C%20Kenya&t=&z=15&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <section className="about-closing">
        <p>FASHION FOR HER · STYLE FOR LITTLE STARS</p>

        <h2>Look Good. Feel Great.</h2>

        <p>
          Lady CK Collections — helping every woman shine
          and every little star sparkle. ✨
        </p>
      </section>
    </main>
  );
}
