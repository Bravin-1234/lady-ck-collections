
import { useState } from "react";
import "./Shop.css";

const WHATSAPP_NUMBER = "254758363148";

const SOCIAL_LINKS = {
  tiktok: "https://www.tiktok.com/@ladyckcollections?_r=1&_t=ZS-9AeWueKuB9x",
  instagram: "https://www.instagram.com/ladyckcollections?rpxt=MWcyZGYzMzc4aTFz",
  facebook: "https://www.facebook.com/share/1EmDjmbUDb/",
};

const categories = [
  "Dresses",
  "Jeans & Casual Wear",
  "Gymwear",
  "Sweatpants",
  "Handbags",
  "Shoes",
  "Kids' Wear",
  "Ladies' Innerwear",
  "Swimming Costumes",
  "Other",
];

const initialForm = {
  customerName: "",
  phone: "",
  category: "",
  item: "",
  size: "",
  colour: "",
  quantity: "1",
  description: "",
  fulfilment: "delivery",
  county: "",
  town: "",
  address: "",
  locationLink: "",
  orderReference: "",
};

export default function Shop() {
  const [form, setForm] = useState(initialForm);
  const [action, setAction] = useState("");
  const [error, setError] = useState("");
  const [locationStatus, setLocationStatus] = useState("");
  const [showSummary, setShowSummary] = useState(false);

  const updateForm = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setError("");
  };

  const prepareAction = (nextAction) => {
    setError("");

    if (nextAction === "cancel") {
      if (!form.orderReference.trim()) {
        setError(
          "Wueh 😂 Enter your order reference first so we can identify your order."
        );
        return;
      }
    } else {
      if (!form.category || !form.item.trim()) {
        setError(
          "Choose a category and tell us which outfit you want. Hata description ya picha inatosha 😂"
        );
        return;
      }

      if (
        !form.quantity ||
        Number(form.quantity) < 1 ||
        Number(form.quantity) > 99
      ) {
        setError("Please enter a quantity between 1 and 99.");
        return;
      }

      if (nextAction === "order" && !form.customerName.trim()) {
        setError("Tukuitaje, fashion star? 😂 Please enter your name.");
        return;
      }

      if (
        nextAction === "order" &&
        form.fulfilment === "delivery" &&
        (!form.town.trim() ||
          (!form.address.trim() && !form.locationLink.trim()))
      ) {
        setError(
          "For delivery, enter your town and either an address or a Google Maps location link."
        );
        return;
      }
    }

    setAction(nextAction);
    setShowSummary(true);
  };

  const shareGpsLocation = () => {
    setError("");
    setLocationStatus("Requesting permission to access your location...");

    if (!navigator.geolocation) {
      setLocationStatus(
        "GPS is not supported by this browser. You can enter your location manually."
      );
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const mapsLink = `https://www.google.com/maps?q=${coords.latitude},${coords.longitude}`;

        setForm((previous) => ({
          ...previous,
          locationLink: mapsLink,
        }));

        setLocationStatus(
          "Location link added. Review it before sharing on WhatsApp."
        );
      },
      (gpsError) => {
        setLocationStatus(
          gpsError.code === 1
            ? "Location permission was declined. Paste a Maps link or enter your address manually."
            : "We couldn't get your location. Try again or enter your address manually."
        );
      },
      { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 }
    );
  };

  const buildWhatsAppMessage = () => {
    const greeting = "Hello Lady CK Collections! ❤️";

    if (action === "cancel") {
      return `${greeting}

I would like to REQUEST CANCELLATION of my order.

Order reference: ${form.orderReference.trim()}
Name: ${form.customerName.trim() || "Not provided"}

Please confirm whether the cancellation can be processed. Asanteni!`;
    }

    const details = [
      `Name: ${form.customerName.trim() || "Not provided"}`,
      `Phone: ${form.phone.trim() || "Not provided"}`,
      `Category: ${form.category}`,
      `Item wanted: ${form.item.trim()}`,
      `Size: ${form.size.trim() || "Not specified"}`,
      `Colour: ${form.colour.trim() || "Not specified"}`,
      `Quantity: ${form.quantity}`,
      `Description: ${form.description.trim() || "No extra details"}`,
    ];

    if (action === "price") {
      return `${greeting}

Nimeona outfit inayonibamba 😂✨

Please help me with a PRICE ENQUIRY.

${details.join("\n")}

Kindly confirm availability, price, available sizes and colours, and any delivery charges before I decide. Asanteni!`;
    }

    details.push(
      `Fulfilment: ${
        form.fulfilment === "delivery" ? "Delivery" : "Collection"
      }`
    );

    if (form.fulfilment === "delivery") {
      details.push(`County: ${form.county.trim() || "Not specified"}`);
      details.push(`Town/area: ${form.town.trim()}`);
      details.push(
        `Address/landmark: ${form.address.trim() || "See Maps link"}`
      );
      details.push(
        `Google Maps location: ${form.locationLink.trim() || "Not provided"}`
      );
    }

    return `${greeting}

I would like to submit an ORDER REQUEST.

${details.join("\n")}

Please confirm availability, total price, delivery charges (if any), and how to complete the order. I understand this request is not confirmed until Lady CK Collections replies.

Asanteni! ❤️`;
  };

  const continueToWhatsApp = () => {
    const message = buildWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const askAboutSocialItem = () => {
    const message =
      "Hey Lady CK Collections! 😂❤️\n\n" +
      "Nimeona outfit imenibamba kwa social media. " +
      "Naweza kuwatumia screenshot au kueleza vile iko ili mnisaidie " +
      "kujua kama inapatikana, sizes, colours na bei yake?\n\nAsanteni!";

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="shop-page">
      {/* HERO */}
      <section className="shop-hero">
        <span className="shop-eyebrow">LADY CK COLLECTIONS</span>

        <h1>
          Your next favourite
          <span> look starts here.</span>
        </h1>

        <p>
          Babe, uko ready kubadilisha wardrobe? 😂❤️
          Discover your next look, ask about prices, and let us help you
          find an outfit that feels like you.
        </p>

        <a href="#shop-social" className="shop-hero-button">
          Discover the drip <span aria-hidden="true">↗</span>
        </a>

        <small>Good style. Personal service. No pressure to buy.</small>
      </section>

      {/* HOW SHOPPING WORKS */}
      <section className="shop-steps" aria-label="How shopping works">
        <div>
          <span>01</span>
          <strong>Discover your look</strong>
          <p>Browse our social pages or describe an outfit you love.</p>
        </div>

        <div>
          <span>02</span>
          <strong>Ask and confirm</strong>
          <p>Check sizes, colours, prices and availability with our team.</p>
        </div>

        <div>
          <span>03</span>
          <strong>Order with confidence</strong>
          <p>Review your request before continuing to WhatsApp.</p>
        </div>
      </section>

      {/* SOCIAL MEDIA DISCOVERY */}
      <section className="shop-social-section" id="shop-social">
        <div className="shop-social-heading">
          <span className="shop-eyebrow">THE DRIP DOESN'T END HERE 😂</span>

          <h2>
            Babe, umeona hii <span>drip?</span> 👀
          </h2>

          <p>
            Usibuy picha pekee 😂 Come uone outfits kwa videos,
            discover new looks, then utuambie ni gani imekunice!
            Your next favourite fit might be one scroll away.
          </p>
        </div>

        <div className="shop-social-cards">
          <a
            className="shop-social-card"
            href={SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore Lady CK Collections on TikTok"
          >
            <span className="shop-social-icon social-tiktok" aria-hidden="true">
              ♪
            </span>

            <span className="shop-social-platform">TIKTOK</span>

            <strong>Angalia drip kwa video 🔥</strong>

            <span className="shop-social-handle">
              @ladyckcollections
            </span>

            <span className="shop-social-cta">Watch the looks ↗</span>
          </a>

          <a
            className="shop-social-card"
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore Lady CK Collections on Instagram"
          >
            <span
              className="shop-social-icon social-instagram"
              aria-hidden="true"
            >
              ◎
            </span>

            <span className="shop-social-platform">INSTAGRAM</span>

            <strong>Outfit goals? Tuko nayo ✨</strong>

            <span className="shop-social-handle">
              @ladyckcollections
            </span>

            <span className="shop-social-cta">Explore the styles ↗</span>
          </a>

          <a
            className="shop-social-card"
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Lady CK Collections on Facebook"
          >
            <span
              className="shop-social-icon social-facebook"
              aria-hidden="true"
            >
              f
            </span>

            <span className="shop-social-platform">FACEBOOK</span>

            <strong>Karibu to the fashion fam ❤️</strong>

            <span className="shop-social-handle">
              Lady CK Collections
            </span>

            <span className="shop-social-cta">Visit our page ↗</span>
          </a>
        </div>

        <div className="shop-social-prompt">
          <div>
            <span className="shop-eyebrow">UMEONA ILE UNATAKA? 👀</span>

            <h3>Don't let the outfit remain a screenshot 😂</h3>

            <p>
              Hata kama hujui jina ya outfit, hakuna pressure!
              Describe vile iko or send us a screenshot on WhatsApp.
              Tutakusaidia ku-check kama inapatikana na bei yake.
            </p>
          </div>

          <button
            className="shop-button shop-button-gold"
            type="button"
            onClick={askAboutSocialItem}
          >
            Ask us on WhatsApp ↗
          </button>
        </div>

        <p className="shop-social-note">
          Follow our pages for fashion inspiration and updates.
          Availability and prices are confirmed by our team.
        </p>
      </section>

      {/* SHOPPING FORM */}
      <section className="shop-form-section" id="shop-form">
        <div className="shop-section-heading">
          <span className="shop-eyebrow">MADE PERSONAL FOR YOU</span>

          <h2>What are you looking for?</h2>

          <p>
            Umeona kitu inakubamba? 😂 Tell us what you want.
            If you're unsure about size, colour, or price, you can
            leave those details open and ask us first.
          </p>
        </div>

        <form
          className="shop-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="shop-form-progress">
            <span className="progress-active">1. Your item</span>
            <span>2. Delivery details</span>
            <span>3. WhatsApp</span>
          </div>

          <div className="shop-form-grid">
            <label>
              What should we call you?
              <input
                name="customerName"
                value={form.customerName}
                onChange={updateForm}
                placeholder="Your name"
                autoComplete="name"
              />
            </label>

            <label>
              Phone number <span className="optional-label">Optional</span>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={updateForm}
                placeholder="e.g. 07XX XXX XXX"
                autoComplete="tel"
              />
            </label>

            <label>
              Category <span className="required-star">*</span>
              <select
                name="category"
                value={form.category}
                onChange={updateForm}
                required
              >
                <option value="">Choose a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Item name or photo description{" "}
              <span className="required-star">*</span>
              <input
                name="item"
                value={form.item}
                onChange={updateForm}
                placeholder="e.g. the black dress in your TikTok"
                required
              />
            </label>

            <label>
              Size <span className="optional-label">If known</span>
              <input
                name="size"
                value={form.size}
                onChange={updateForm}
                placeholder="e.g. S, M, L, size 38"
              />
            </label>

            <label>
              Preferred colour
              <input
                name="colour"
                value={form.colour}
                onChange={updateForm}
                placeholder="e.g. black, blue, pink"
              />
            </label>

            <label>
              Quantity
              <input
                name="quantity"
                type="number"
                min="1"
                max="99"
                value={form.quantity}
                onChange={updateForm}
                required
              />
            </label>

            <label className="shop-full-width">
              Any special details?
              <textarea
                name="description"
                value={form.description}
                onChange={updateForm}
                placeholder="Describe the outfit, occasion, budget, or paste details from a social post..."
                rows="4"
              />
            </label>
          </div>

          <div className="shop-delivery-panel">
            <span className="shop-eyebrow">
              HOW WOULD YOU LIKE TO RECEIVE IT?
            </span>

            <div className="shop-fulfilment-options">
              <label
                className={
                  form.fulfilment === "delivery"
                    ? "fulfilment-selected"
                    : ""
                }
              >
                <input
                  type="radio"
                  name="fulfilment"
                  value="delivery"
                  checked={form.fulfilment === "delivery"}
                  onChange={updateForm}
                />

                <span aria-hidden="true">⌖</span>
                <strong>Deliver to me</strong>
                <small>Share your town and delivery location.</small>
              </label>

              <label
                className={
                  form.fulfilment === "collection"
                    ? "fulfilment-selected"
                    : ""
                }
              >
                <input
                  type="radio"
                  name="fulfilment"
                  value="collection"
                  checked={form.fulfilment === "collection"}
                  onChange={updateForm}
                />

                <span aria-hidden="true">⌂</span>
                <strong>I'll collect</strong>
                <small>Ask us to confirm collection arrangements.</small>
              </label>
            </div>

            {form.fulfilment === "delivery" && (
              <div className="shop-form-grid shop-location-fields">
                <label>
                  County
                  <input
                    name="county"
                    value={form.county}
                    onChange={updateForm}
                    placeholder="e.g. Kiambu"
                  />
                </label>

                <label>
                  Town or area <span className="required-star">*</span>
                  <input
                    name="town"
                    value={form.town}
                    onChange={updateForm}
                    placeholder="e.g. Ruiru"
                    required
                  />
                </label>

                <label className="shop-full-width">
                  Estate, street, building, or nearby landmark
                  <input
                    name="address"
                    value={form.address}
                    onChange={updateForm}
                    placeholder="Add a useful delivery description"
                  />
                </label>

                <div className="shop-full-width shop-gps-box">
                  <div>
                    <strong>Share a map location</strong>
                    <p>
                      Optional. Use GPS or paste a Google Maps link.
                      Review or remove the link before opening WhatsApp.
                    </p>
                  </div>

                  <button
                    className="shop-gps-button"
                    type="button"
                    onClick={shareGpsLocation}
                  >
                    <span aria-hidden="true">◎</span> Share my GPS location
                  </button>

                  {form.locationLink && (
                    <div className="shop-location-added">
                      <span>Map link added</span>

                      <a
                        href={form.locationLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Preview location ↗
                      </a>

                      <button
                        type="button"
                        onClick={() => {
                          setForm((previous) => ({
                            ...previous,
                            locationLink: "",
                          }));
                          setLocationStatus("");
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  )}

                  <label>
                    Or paste a Google Maps link
                    <input
                      type="url"
                      name="locationLink"
                      value={form.locationLink}
                      onChange={(event) => {
                        updateForm(event);
                        setLocationStatus("");
                      }}
                      placeholder="https://maps.google.com/..."
                    />
                  </label>

                  {locationStatus && (
                    <p className="shop-location-status" role="status">
                      {locationStatus}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="shop-cancellation">
            <label>
              Already placed an order? Enter its reference to request
              cancellation.
              <input
                name="orderReference"
                value={form.orderReference}
                onChange={updateForm}
                placeholder="Order reference (for cancellation)"
              />
            </label>

            <p>
              Cancellation is a request, not an automatic cancellation.
              Our team will confirm the outcome.
            </p>
          </div>

          {error && (
            <p className="shop-error" role="alert">
              {error}
            </p>
          )}

          <div className="shop-action-buttons">
            <button
              className="shop-button shop-button-gold"
              type="button"
              onClick={() => prepareAction("order")}
            >
              Request this look <span aria-hidden="true">↗</span>
            </button>

            <button
              className="shop-button shop-button-outline"
              type="button"
              onClick={() => prepareAction("price")}
            >
              Ask the price <span aria-hidden="true">💬</span>
            </button>

            <button
              className="shop-button shop-button-cancel"
              type="button"
              onClick={() => prepareAction("cancel")}
            >
              Request cancellation
            </button>
          </div>

          <p className="shop-privacy-note">
            Your details and location are only included in the message
            you choose to send. Nothing is sent until you review the
            message and send it in WhatsApp.
          </p>
        </form>
      </section>

      {/* ORDER SUMMARY */}
      {showSummary && (
        <div
          className="shop-summary-backdrop"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setShowSummary(false);
            }
          }}
        >
          <section
            className="shop-summary"
            role="dialog"
            aria-modal="true"
            aria-labelledby="shop-summary-title"
          >
            <button
              className="shop-summary-close"
              type="button"
              onClick={() => setShowSummary(false)}
              aria-label="Close summary"
            >
              ×
            </button>

            <span className="shop-eyebrow">PLEASE CHECK</span>

            <h2 id="shop-summary-title">
              {action === "price"
                ? "Your price enquiry"
                : action === "cancel"
                ? "Your cancellation request"
                : "Your order request"}
            </h2>

            <p className="shop-summary-intro">
              Review the details below. You can close this panel and
              edit the form before continuing.
            </p>

            <div className="shop-summary-details">
              {action === "cancel" ? (
                <>
                  <div>
                    <span>Order reference</span>
                    <strong>{form.orderReference || "Not provided"}</strong>
                  </div>

                  <div>
                    <span>Customer</span>
                    <strong>{form.customerName || "Not provided"}</strong>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <span>Item</span>
                    <strong>{form.item || "Not specified"}</strong>
                  </div>

                  <div>
                    <span>Category</span>
                    <strong>{form.category || "Not selected"}</strong>
                  </div>

                  <div>
                    <span>Size / colour</span>
                    <strong>
                      {[form.size, form.colour].filter(Boolean).join(" / ") ||
                        "Not specified"}
                    </strong>
                  </div>

                  <div>
                    <span>Quantity</span>
                    <strong>{form.quantity}</strong>
                  </div>

                  {action === "order" && (
                    <>
                      <div>
                        <span>Receiving method</span>
                        <strong>
                          {form.fulfilment === "delivery"
                            ? "Delivery"
                            : "Collection"}
                        </strong>
                      </div>

                      {form.fulfilment === "delivery" && (
                        <div>
                          <span>Delivery location</span>
                          <strong>
                            {[form.town, form.county, form.address]
                              .filter(Boolean)
                              .join(", ") || "See map link"}
                          </strong>
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
            </div>

            <p className="shop-summary-reminder">
              {action === "price"
                ? "This asks the shop for pricing and availability; it does not commit you to buying."
                : action === "cancel"
                ? "The shop must confirm whether your order can be cancelled."
                : "This is an order request, not a confirmed purchase. The shop should confirm availability, price, and delivery arrangements."}
            </p>

            <button
              className="shop-button shop-button-gold shop-summary-send"
              type="button"
              onClick={continueToWhatsApp}
            >
              Continue to WhatsApp <span aria-hidden="true">↗</span>
            </button>

            <button
              className="shop-summary-edit"
              type="button"
              onClick={() => setShowSummary(false)}
            >
              Go back and edit details
            </button>
          </section>
        </div>
      )}
    </main>
  );
}
