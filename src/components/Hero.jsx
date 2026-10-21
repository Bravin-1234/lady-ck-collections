
import React from "react";
import desktopHero from "../assets/images/hero-desktop.png";
import mobileHero from "../assets/images/hero-mobile.png";

export default function Hero() {
  return (
    <main className="hero">
      <picture className="hero-picture">
        <source
          media="(max-width: 768px)"
          srcSet={mobileHero}
        />

        <img
          src={desktopHero}
          alt="Lady C K Collections — Dress the Best Version of You"
          className="hero-image"
          draggable="false"
        />
      </picture>
    </main>
  );
}
