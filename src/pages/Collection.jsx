
import React, { useMemo, useState } from "react";
import "./Collection.css";

// ==================== DRESSES ====================
import dresses from "../assets/images/dresses.jpg";
import dress1 from "../assets/images/dresses-01.jpg";
import dress2 from "../assets/images/dresses-02.jpg";
import dress3 from "../assets/images/dresses-03.jpg";
import dress4 from "../assets/images/dresses-04.jpg";
import dress5 from "../assets/images/dresses-05.jpg";
import dress6 from "../assets/images/dresses-06.jpg";
import dress7 from "../assets/images/dresses-07.jpg";
import dress8 from "../assets/images/dresses-08.jpg";
import dress9 from "../assets/images/dresses-09.jpg";
import dress10 from "../assets/images/dresses-10.jpg";
import dress11 from "../assets/images/dresses-11.jpg";

// ==================== HEADBANDS ====================
import headbands from "../assets/images/headbands.jpg";

// ==================== JEANS ====================
import jeans from "../assets/images/jeans.jpg";
import jeans1 from "../assets/images/jeans-01.jpg";
import jeans2 from "../assets/images/jeans-02.jpg";
import jeans3 from "../assets/images/jeans-03.jpg";
import jeans4 from "../assets/images/jeans-04.jpg";

// ==================== CASUAL WEAR ====================
import casualwear from "../assets/images/casualwear.jpg";
import casualwear1 from "../assets/images/casualwear-01.jpg";
import casualwear2 from "../assets/images/casualwear-02.jpg";
import casualwear3 from "../assets/images/casualwear-03.jpg";

// ==================== GYMWEAR ====================
import gymwear from "../assets/images/gymwear.jpg";
import gymwear1 from "../assets/images/gymwear-01.jpg";
import gymwear2 from "../assets/images/gymwear-02.jpg";
import gymwear3 from "../assets/images/gymwear-03.jpg";

// ==================== SWEATPANTS ====================
import sweatpants from "../assets/images/sweatpants.jpg";
import sweatpants1 from "../assets/images/sweatpants-01.jpg";
import sweatpants2 from "../assets/images/sweatpants-02.jpg";
import sweatpants3 from "../assets/images/sweatpants-03.jpg";
import sweatpants4 from "../assets/images/sweatpants-04.jpg";
import sweatpants5 from "../assets/images/sweatpants-05.jpg";
import sweatpants6 from "../assets/images/sweatpants-06.jpg";
import sweatpants7 from "../assets/images/sweatpants-07.jpg";
import sweatpants8 from "../assets/images/sweatpants-08.jpg";
import sweatpants9 from "../assets/images/sweatpants-09.jpg";
import sweatpants10 from "../assets/images/sweatpants-10.jpg";
import sweatpants11 from "../assets/images/sweatpants-11.jpg";

// ==================== TRACKSUITS ====================
import tracksuits from "../assets/images/tracksuits.jpg";

// ==================== HANDBAGS ====================
import handbag from "../assets/images/handbag.jpg";
import handbag1 from "../assets/images/handbag-01.jpg";
import handbag2 from "../assets/images/handbag-02.jpg";

// ==================== SHOES ====================
import shoes from "../assets/images/shoes.jpg";
import shoes1 from "../assets/images/shoes-01.jpg";
import shoes2 from "../assets/images/shoes-02.jpg";
import shoes3 from "../assets/images/shoes-03.jpg";
import shoes4 from "../assets/images/shoes-04.jpg";
import shoes5 from "../assets/images/shoes-05.jpg";
import shoes6 from "../assets/images/shoes-06.jpg";
import shoes7 from "../assets/images/shoes-07.jpg";

// ==================== BALLET SLIPPERS ====================
import balletslippers from "../assets/images/balletslippers.jpg";

// ==================== KIDS' WEAR ====================
import kids from "../assets/images/kids-01.jpg";
import kids1 from "../assets/images/kids-02.jpg";
import kids2 from "../assets/images/kids-03.jpg";
import kids3 from "../assets/images/kids-04.jpg";
import kids4 from "../assets/images/kids-05.jpg";
import kids5 from "../assets/images/kids-06.jpg";
import kids6 from "../assets/images/kids-07.jpg";

// ==================== INNERWEAR ====================
import innerwear from "../assets/images/innerwears.jpg";

// ==================== SWIMMING COSTUMES ====================
import swimwear from "../assets/images/swimmingcostume.jpg";
import swimwear1 from "../assets/images/swimmingcostume-01.jpg";
import swimwear2 from "../assets/images/swimmingcostume-02.jpg";

// ==================== BOUTIQUE VIDEOS ====================
import video1 from "../assets/videos/vid-01.mp4";
import video2 from "../assets/videos/vid-02.mp4";
import video3 from "../assets/videos/vid-03.mp4";
import video4 from "../assets/videos/vid-04.mp4";
import video5 from "../assets/videos/vid-05.mp4";

const WHATSAPP_NUMBER = "254758363148";

// ==================== PRODUCT GENERATOR ====================
const makeProducts = (category, images, prefix) =>
  images.map((image, index) => ({
    id: `${prefix}-${index + 1}`,
    name: `${category} ${String(index + 1).padStart(2, "0")}`,
    category,
    image,
    price: null,
    sizes: [],
    colors: [],
    isNew: false,
    isBestseller: false,
    limitedStock: false,
  }));

// ==================== CATEGORIES ====================
const categories = [
  { name: "All", icon: "✦" },
  { name: "Dresses", icon: "♡" },
  { name: "Headbands", icon: "✧" },
  { name: "Jeans", icon: "◇" },
  { name: "Casual Wear", icon: "✦" },
  { name: "Gymwear", icon: "↗" },
  { name: "Sweatpants", icon: "◈" },
  { name: "Tracksuits", icon: "◇" },
  { name: "Handbags", icon: "♧" },
  { name: "Shoes", icon: "⌁" },
  { name: "Ballet Slippers", icon: "♡" },
  { name: "Kids' Wear", icon: "♧" },
  { name: "Innerwears & Essentials", icon: "✿" },
  { name: "Swimming Costumes", icon: "≈" },
];

// ==================== PRODUCTS ====================
const products = [
  ...makeProducts(
    "Dresses",
    [
      dresses,
      dress1,
      dress2,
      dress3,
      dress4,
      dress5,
      dress6,
      dress7,
      dress8,
      dress9,
      dress10,
      dress11,
    ],
    "dresses"
  ),

  ...makeProducts("Headbands", [headbands], "headbands"),

  ...makeProducts(
    "Jeans",
    [jeans, jeans1, jeans2, jeans3, jeans4],
    "jeans"
  ),

  ...makeProducts(
    "Casual Wear",
    [casualwear, casualwear1, casualwear2, casualwear3],
    "casualwear"
  ),

  ...makeProducts(
    "Gymwear",
    [gymwear, gymwear1, gymwear2, gymwear3],
    "gymwear"
  ),

  ...makeProducts(
    "Sweatpants",
    [
      sweatpants,
      sweatpants1,
      sweatpants2,
      sweatpants3,
      sweatpants4,
      sweatpants5,
      sweatpants6,
      sweatpants7,
      sweatpants8,
      sweatpants9,
      sweatpants10,
      sweatpants11,
    ],
    "sweatpants"
  ),

  ...makeProducts("Tracksuits", [tracksuits], "tracksuits"),

  ...makeProducts(
    "Handbags",
    [handbag, handbag1, handbag2],
    "handbags"
  ),

  ...makeProducts(
    "Shoes",
    [
      shoes,
      shoes1,
      shoes2,
      shoes3,
      shoes4,
      shoes5,
      shoes6,
      shoes7,
    ],
    "shoes"
  ),

  ...makeProducts(
    "Ballet Slippers",
    [balletslippers],
    "ballet-slippers"
  ),

  ...makeProducts(
    "Kids' Wear",
    [kids, kids1, kids2, kids3, kids4, kids5, kids6],
    "kids"
  ),

  ...makeProducts(
    "Innerwears & Essentials",
    [innerwear],
    "innerwear"
  ),

  ...makeProducts(
    "Swimming Costumes",
    [swimwear, swimwear1, swimwear2],
    "swimwear"
  ),
];

// ==================== SHOP THE VIBE ====================
const vibes = [
  {
    name: "Soft Girl Era",
    description: "Cute looks, dresses & accessories 🎀",
    category: "Dresses",
    image: dress1,
    className: "soft-girl",
  },
  {
    name: "Street Swag",
    description: "Casual drip for everyday moves 😎",
    category: "Casual Wear",
    image: casualwear1,
    className: "street-swag",
  },
  {
    name: "Gym Mode",
    description: "Move confidently. Look the part 💪",
    category: "Gymwear",
    image: gymwear1,
    className: "gym-mode",
  },
  {
    name: "Date Night",
    description: "Bring the main-character energy ✨",
    category: "Dresses",
    image: dress2,
    className: "date-night",
  },
  {
    name: "Vacay Vibes",
    description: "Holiday looks and swimwear 🌴",
    category: "Swimming Costumes",
    image: swimwear,
    className: "vacay-vibes",
  },
];

// ==================== STYLE INSPIRATION ====================
const lookbook = [
  {
    title: "Campus Drip",
    description: "Jeans for your everyday plans.",
    category: "Jeans",
    image: jeans2,
    tag: "EVERYDAY STYLE",
  },
  {
    title: "Weekend Link-up",
    description: "Comfortable tracksuits for your weekend moves.",
    category: "Tracksuits",
    image: tracksuits,
    tag: "CASUAL VIBES",
  },
  {
    title: "Brunch Look",
    description: "An outfit moment worth remembering.",
    category: "Dresses",
    image: dress3,
    tag: "SOFT & CHIC",
  },
  {
    title: "Complete the Fit",
    description: "Find accessories to finish your look.",
    category: "Handbags",
    image: handbag2,
    tag: "THE FINISHING TOUCH",
  },
];

// ==================== VIDEO SHOWCASE ====================
const collectionVideos = [
  {
    id: "video-01",
    title: "The Boutique Vibe",
    description: "Get a closer look at Lady CK Collections.",
    src: video1,
  },
  {
    id: "video-02",
    title: "Style Inspiration",
    description: "Your next look might be right here.",
    src: video2,
  },
  {
    id: "video-03",
    title: "Fresh Fashion",
    description: "Explore the looks and find your own vibe.",
    src: video3,
  },
  {
    id: "video-04",
    title: "Find Your Drip",
    description: "Different looks, different moods. Choose yours.",
    src: video4,
  },
  {
    id: "video-05",
    title: "More from Lady CK",
    description: "Stay stylish and keep the drip alive.",
    src: video5,
  },
];

// ==================== SOCIAL ACCOUNTS ====================
const socialAccounts = [
  {
    name: "TikTok",
    description: "Watch the fits, videos and latest vibes.",
    handle: "@ladyckcollections",
    url: "https://www.tiktok.com/@ladyckcollections?_r=1&_t=ZS-9AeWueKuB9x",
    icon: "♪",
    className: "tiktok",
  },
  {
    name: "Instagram",
    description: "Get outfit inspiration and browse our looks.",
    handle: "@ladyckcollections",
    url: "https://www.instagram.com/ladyckcollections?rpxt=MWcyZGYzMzc4aTFz",
    icon: "◎",
    className: "instagram",
  },
  {
    name: "Facebook",
    description: "Stay connected with Lady CK Collections.",
    handle: "Lady CK Collections",
    url: "https://www.facebook.com/share/1EmDjmbUDb/",
    icon: "f",
    className: "facebook",
  },
];

// ==================== WHATSAPP HELPER ====================
function makeWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

// ==================== SECTION HEADING ====================
function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="collection-heading">
      <span className="collection-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

// ==================== PRODUCT CARD ====================
function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="product-image"
        />

        {product.isNew && (
          <span className="product-badge">New Drop</span>
        )}

        {product.isBestseller && (
          <span className="product-badge bestseller-badge">
            Bestseller
          </span>
        )}

        {product.limitedStock && (
          <span className="product-badge limited-badge">
            Limited Stock
          </span>
        )}

        <a
          className="product-quick-order"
          href={makeWhatsAppLink(
            `Hi Lady CK Collections! I'm interested in ${product.name} from the ${product.category} category. Please share its price, available sizes and colours.`
          )}
          target="_blank"
          rel="noreferrer"
          aria-label={`Ask about ${product.name} on WhatsApp`}
        >
          Ask about this item ↗
        </a>
      </div>

      <div className="product-information">
        <div>
          <span className="product-category">{product.category}</span>
          <h3>{product.name}</h3>
        </div>

        <p className="product-price">
          {product.price !== null
            ? `KSh ${product.price.toLocaleString("en-KE")}`
            : "Ask for price"}
        </p>

        <a
          className="product-order-link"
          href={makeWhatsAppLink(
            `Hi Lady CK Collections! Nataka hii 🔥: ${product.name} (${product.category}). Kindly share the price, available sizes and colours.`
          )}
          target="_blank"
          rel="noreferrer"
        >
          Nataka hii 🔥 <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

// ==================== VIDEO CARD ====================
function VideoCard({ video }) {
  return (
    <article className="collection-video-card">
      <div className="collection-video-frame">
        <video
          className="collection-video"
          controls
          preload="metadata"
          playsInline
          aria-label={video.title}
        >
          <source src={video.src} type="video/mp4" />
          Your browser does not support embedded videos.
        </video>
      </div>

      <div className="collection-video-copy">
        <span className="collection-video-label">
          LADY CK COLLECTIONS
        </span>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </div>
    </article>
  );
}

// ==================== MAIN COLLECTION PAGE ====================
export default function Collection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("featured");

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" ||
        product.category === activeCategory;

      const term = searchTerm.trim().toLowerCase();

      const matchesSearch =
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });

    if (sortOrder === "name") {
      result = [...result].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return result;
  }, [activeCategory, searchTerm, sortOrder]);

  function chooseCategory(category) {
    setActiveCategory(category);
    setSearchTerm("");

    document.getElementById("all-products")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function clearFilters() {
    setActiveCategory("All");
    setSearchTerm("");
  }

  return (
    <main className="collection-page">
      {/* ==================== HERO ==================== */}
      <section className="collection-hero">
        <div
          className="collection-hero-glow"
          aria-hidden="true"
        />

        <div className="collection-hero-content">
          <span className="hero-mini-label">
            LADY CK COLLECTIONS <span>✦</span> YOUR STYLE DESTINATION
          </span>

          <h1>
            Your Style.
            <br />
            Your <span>Rules.</span>
          </h1>

          <p className="collection-hero-tagline">
            Drip iko hapa. Piga luku safi, vaa taste yako 😎.
          </p>

          <p className="collection-hero-description">
            Explore your next favourite look, discover fresh inspiration,
            and find a style that feels like you.
          </p>

          <div className="collection-hero-actions">
            <a
              className="gold-button"
              href="#all-products"
              onClick={() => {
                setActiveCategory("All");
                setSearchTerm("");
              }}
            >
              Explore Collection <span>↘</span>
            </a>

            <a
              className="outline-button"
              href="#shop-the-vibe"
            >
              Find Your Vibe
            </a>
          </div>

          <div className="hero-trust-line">
            <span>✦</span> Fashion for your own kind of confidence
          </div>
        </div>

        <div
          className="collection-hero-decoration"
          aria-hidden="true"
        >
          <span className="decoration-ring ring-one" />
          <span className="decoration-ring ring-two" />
          <span className="decoration-star">✦</span>
          <span className="decoration-caption">
            STYLE IS A STATEMENT
          </span>
        </div>
      </section>

      {/* ==================== QUICK CATEGORY LINKS ==================== */}
      <nav
        className="collection-jump-links"
        aria-label="Shop categories"
      >
        {categories.slice(1).map((category) => (
          <button
            key={category.name}
            type="button"
            onClick={() => chooseCategory(category.name)}
          >
            <span>{category.icon}</span> {category.name}
          </button>
        ))}
      </nav>

      {/* ==================== SHOP THE VIBE ==================== */}
      <section className="vibe-section" id="shop-the-vibe">
        <SectionHeading
          eyebrow="FIND YOUR ENERGY"
          title="Shop the Vibe"
          description="Different moods. Different looks. Which one is you?"
        />

        <div className="vibe-grid">
          {vibes.map((vibe, index) => (
            <button
              type="button"
              className={`vibe-card ${vibe.className}`}
              key={vibe.name}
              onClick={() => chooseCategory(vibe.category)}
              aria-label={`Explore ${vibe.name}`}
            >
              <img src={vibe.image} alt="" loading="lazy" />

              <span className="vibe-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="vibe-overlay">
                <span className="vibe-description">
                  {vibe.description}
                </span>
                <span className="vibe-title">{vibe.name}</span>
                <span className="vibe-explore">
                  Explore the look ↗
                </span>
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ==================== FRESH DROPS ==================== */}
      <section className="fresh-drops-section">
        <div className="fresh-drops-copy">
          <span className="collection-eyebrow">
            YOUR NEXT FAVOURITE LOOK
          </span>

          <h2>
            The Latest <span>Drip</span> ✨
          </h2>

          <p>
            Fresh stock imeingia? This is where the newest arrivals belong.
          </p>

          <p className="sheng-note">
            Usibaki kwa seen 😂 — come see what catches your eye.
          </p>

          <button
            type="button"
            className="gold-button"
            onClick={() => chooseCategory("All")}
          >
            Explore All Looks <span>↗</span>
          </button>
        </div>

        <div className="fresh-drops-gallery">
          <img src={dress8} alt="Dress collection" loading="lazy" />
          <img src={handbag2} alt="Handbag collection" loading="lazy" />
          <img
            src={casualwear2}
            alt="Casual wear collection"
            loading="lazy"
          />
        </div>
      </section>

      {/* ==================== STYLE INSPIRATION ==================== */}
      <section
        className="lookbook-section"
        id="style-inspiration"
      >
        <SectionHeading
          eyebrow="GET INSPIRED"
          title="Style Inspiration"
          description="Need a little outfit inspo? Start with a vibe and make it your own."
        />

        <div className="lookbook-grid">
          {lookbook.map((look, index) => (
            <button
              type="button"
              className="lookbook-card"
              key={look.title}
              onClick={() => chooseCategory(look.category)}
            >
              <div className="lookbook-image-wrap">
                <img src={look.image} alt="" loading="lazy" />

                <span className="lookbook-index">
                  LOOK {String(index + 1).padStart(2, "0")}
                </span>

                <span className="lookbook-arrow">↗</span>
              </div>

              <div className="lookbook-copy">
                <span>{look.tag}</span>
                <h3>{look.title}</h3>
                <p>{look.description}</p>
              </div>
            </button>
          ))}
        </div>

        <p className="lookbook-disclaimer">
          Outfit ideas are for inspiration. Product availability is
          confirmed by the boutique.
        </p>
      </section>

      {/* ==================== VIDEO SHOWCASE ==================== */}
      <section
        className="collection-videos-section"
        id="collection-videos"
      >
        <SectionHeading
          eyebrow="WATCH THE VIBE"
          title="Behind the Drip 🎬"
          description="See more of Lady CK Collections. Press play, catch the vibe, and find your next favourite look."
        />

        <div className="collection-videos-grid">
          {collectionVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        <p className="collection-videos-note">
          Love a look? Usiiache iende 😂 — come enquire directly and
          we'll help you check availability.
        </p>

        <a
          className="gold-button collection-videos-cta"
          href={makeWhatsAppLink(
            "Hi Lady CK Collections! I've watched your videos and would like to enquire about the items in your collection."
          )}
          target="_blank"
          rel="noreferrer"
        >
          Ask About a Look <span>↗</span>
        </a>
      </section>

      {/* ==================== PRODUCTS, SEARCH AND FILTERS ==================== */}
      <section
        className="all-products-section"
        id="all-products"
      >
        <SectionHeading
          eyebrow="EXPLORE YOUR OPTIONS"
          title="Find Your Look"
          description="Browse each category separately and ask us about your favourites."
        />

        <div className="product-toolbar">
          <label className="collection-search">
            <span aria-hidden="true">⌕</span>

            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search dresses, jeans, casual wear, handbags..."
              aria-label="Search collection"
            />

            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </label>

          <label className="sort-control">
            <span>Sort:</span>

            <select
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value)}
              aria-label="Sort products"
            >
              <option value="featured">Featured</option>
              <option value="name">Name A–Z</option>
            </select>
          </label>
        </div>

        <div
          className="category-filter-list"
          aria-label="Filter by category"
        >
          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              className={
                activeCategory === category.name
                  ? "active-filter"
                  : ""
              }
              onClick={() => setActiveCategory(category.name)}
              aria-pressed={activeCategory === category.name}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        <div className="product-results-line">
          <p>
            Showing <strong>{filteredProducts.length}</strong>{" "}
            {filteredProducts.length === 1 ? "item" : "items"}
            {activeCategory !== "All" && (
              <> in <strong>{activeCategory}</strong></>
            )}
          </p>

          {(activeCategory !== "All" || searchTerm) && (
            <button type="button" onClick={clearFilters}>
              Clear filters ×
            </button>
          )}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                product={product}
                key={product.id}
              />
            ))}
          </div>
        ) : (
          <div className="empty-search-state">
            <span className="empty-search-icon">⌕</span>
            <h3>Aki, hatujapata hiyo look 😅</h3>

            <p>
              Try another search or category. Maybe your next favourite
              iko huko!
            </p>

            <button
              type="button"
              className="gold-button"
              onClick={clearFilters}
            >
              Show All Products
            </button>
          </div>
        )}
      </section>

      {/* ==================== SOCIAL MEDIA ==================== */}
      <section
        className="social-showcase-section"
        id="social-showcase"
      >
        <div className="social-showcase-heading">
          <div>
            <span className="collection-eyebrow">
              MORE FASHION. MORE VIBES.
            </span>

            <h2>
              Keep the Drip <span>Alive</span> 🖤
            </h2>

            <p>
              For more click izo buttons zetu za social handles.
              Kam ucheki stock fty fty🔥
            </p>
          </div>

          <p className="social-follow-note">
            Follow Lady CK for outfit inspo, new looks and more vibes. 




          </p>
        </div>

        <div className="social-cards">
          {socialAccounts.map((account) => (
            <a
              href={account.url}
              target="_blank"
              rel="noreferrer"
              className={`social-card ${account.className}`}
              key={account.name}
            >
              <span className="social-icon" aria-hidden="true">
                {account.icon}
              </span>

              <span className="social-card-content">
                <strong>{account.name}</strong>
                <span className="social-handle">
                  {account.handle}
                </span>
                <span className="social-description">
                  {account.description}
                </span>
                <span className="social-open-link">
                  Explore more ↗
                </span>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ==================== WHATSAPP SHOPPING CTA ==================== */}
      <section className="collection-contact-section">
        <div className="contact-star" aria-hidden="true">
          ✦
        </div>

        <span className="collection-eyebrow">
          YOUR NEXT LOOK STARTS HERE
        </span>

        <h2>
          Seen Something <span>You Love?</span>
        </h2>

        <p>
          Have a question about the price, size, colour or availability?
          Talk to Lady CK Collections directly.
        </p>

        <a
          href={makeWhatsAppLink(
            "Hi Lady CK Collections! I'd like to enquire about your collection. Please help me find a look."
          )}
          className="gold-button"
          target="_blank"
          rel="noreferrer"
        >
          Enquire on WhatsApp <span>↗</span>
        </a>

        <p className="contact-sheng">
          Your style, your choice — usibaki nyuma 😎
        </p>
      </section>
    </main>
  );
}
