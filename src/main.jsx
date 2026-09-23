import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, MapPin, Menu, X } from "lucide-react";
import "./styles.css";

const menu = [
  {
    cat: "Starters",
    name: "Burrata & Embered Tomato",
    desc: "Creamy burrata, charred tomatoes, basil oil, sourdough.",
    price: "₹420",
    img: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=1000&q=85",
  },
  {
    cat: "Main Course",
    name: "Herb Roasted Chicken",
    desc: "Roasted greens, pomme purée, wild mushroom jus.",
    price: "₹690",
    img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1000&q=85",
  },
  {
    cat: "Pizza / Pasta",
    name: "Truffle Mushroom Rigatoni",
    desc: "Wild mushrooms, parmesan, black truffle cream.",
    price: "₹560",
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=85",
  },
  {
    cat: "Desserts",
    name: "Burnt Basque Cheesecake",
    desc: "Silky center, caramelized top, seasonal berries.",
    price: "₹360",
    img: "https://images.unsplash.com/photo-1578775887804-699de7086ff9?auto=format&fit=crop&w=1000&q=85",
  },
  {
    cat: "Drinks",
    name: "Savoré Citrus Spritz",
    desc: "Blood orange, rosemary, citrus, sparkling tonic.",
    price: "₹290",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=85",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",
];

function App() {
  const [open, setOpen] = useState(false);
  const [cat, setCat] = useState("All");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(scrollY > 40);
    addEventListener("scroll", f);
    return () => removeEventListener("scroll", f);
  }, []);
  const filtered = cat === "All" ? menu : menu.filter((x) => x.cat === cat);
  const cats = [
    "All",
    "Starters",
    "Main Course",
    "Pizza / Pasta",
    "Desserts",
    "Drinks",
  ];
  return (
    <div className="site">
      <header className={scrolled ? "nav scrolled" : "nav"}>
        <a className="logo" href="#home">
          SAVOR<span>É</span>
        </a>
        <nav className={open ? "links open" : "links"}>
          {["About", "Menu", "Gallery", "Reviews", "Contact"].map((x) => (
            <a
              key={x}
              href={"#" + x.toLowerCase()}
              onClick={() => setOpen(false)}
            >
              {x}
            </a>
          ))}
          <a className="nav-cta" href="#reserve">
            Reserve a table <ArrowUpRight size={17} />
          </a>
        </nav>
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-bg" />
          <div className="hero-grain" />
          <div className="hero-copy reveal">
            <p className="eyebrow">
              <i /> EST. 2014 · MODERN KITCHEN
            </p>
            <h1>
              Good food.
              <br />
              <em>Great moments.</em>
            </h1>
            <p className="hero-text">
              An intimate table for bold flavors, warm conversations, and
              evenings worth remembering.
            </p>
            <div className="hero-actions">
              <a className="button light" href="#menu">
                Explore the menu <ArrowUpRight size={18} />
              </a>
              <a className="text-link" href="#reserve">
                Reserve your table <span>→</span>
              </a>
            </div>
          </div>
          <div className="hero-side">
            <span>SCROLL TO DISCOVER</span>
            <div />
          </div>
          <div className="hero-bottom">
            <span>01 — 04</span>
            <span>GUWAHATI · INDIA</span>
            <span>OPEN DAILY · 12PM — 11PM</span>
          </div>
        </section>

        <section className="intro section" id="about">
          <div className="section-label">01 / THE SAVORÉ STORY</div>
          <div className="intro-grid">
            <div>
              <h2>
                Food with a <em>point of view.</em>
              </h2>
            </div>
            <div className="intro-copy">
              <p>
                We built SAVORÉ around one simple idea: a restaurant should feel
                as memorable as the meal.
              </p>
              <p>
                Seasonal ingredients, fire, craft and a little curiosity come
                together in a space made for lingering.
              </p>
              <a href="#menu" className="under-link">
                Discover our story <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="stats">
            <div>
              <strong>
                10<span>+</span>
              </strong>
              <small>YEARS OF CRAFT</small>
            </div>
            <div>
              <strong>
                50<span>+</span>
              </strong>
              <small>SIGNATURE DISHES</small>
            </div>
            <div>
              <strong>
                10K<span>+</span>
              </strong>
              <small>HAPPY GUESTS</small>
            </div>
            <div>
              <strong>
                4.9<span>★</span>
              </strong>
              <small>GUEST RATING</small>
            </div>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1800&q=90" />
            <span>THE ROOM / 01</span>
          </div>
        </section>

        <section className="menu-section section" id="menu">
          <div className="section-head">
            <div>
              <div className="section-label">02 / FROM THE KITCHEN</div>
              <h2>
                Made to be <em>remembered.</em>
              </h2>
            </div>
            <p>
              Our menu changes with the seasons.
              <br />
              These are a few of our signatures.
            </p>
          </div>
          <div className="filters">
            {cats.map((x) => (
              <button
                className={cat === x ? "active" : ""}
                onClick={() => setCat(x)}
                key={x}
              >
                {x}
              </button>
            ))}
          </div>
          <div className="menu-grid">
            {filtered.map((x, i) => (
              <article className="dish" key={x.name}>
                <div className="dish-img">
                  <img src={x.img} />
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="dish-info">
                  <div>
                    <h3>{x.name}</h3>
                    <p>{x.desc}</p>
                  </div>
                  <b>{x.price}</b>
                </div>
              </article>
            ))}
          </div>
          <div className="menu-foot">
            <span>Full menu available in restaurant</span>
            <a href="#reserve">
              View all dishes <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        <section className="signature">
          <div className="signature-image">
            <img src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1800&q=90" />
            <div className="dish-stamp">
              CHEF'S
              <br />
              <i>SIGNATURE</i>
            </div>
          </div>
          <div className="signature-copy">
            <div className="section-label">03 / THE ONE TO TRY</div>
            <h2>
              The Savoré
              <br />
              <em>Signature.</em>
            </h2>
            <p>
              Slow-roasted seasonal vegetables, whipped feta, toasted grains and
              a bright herb dressing. Simple ingredients, treated exceptionally
              well.
            </p>
            <div className="sig-meta">
              <span>CHEF'S CHOICE</span>
              <strong>₹520</strong>
            </div>
            <a className="button dark" href="#reserve">
              I'd like a table <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        <section className="values section">
          <div className="section-label">04 / WHY SAVORÉ</div>
          <div className="values-head">
            <h2>
              The details
              <br />
              <em>matter.</em>
            </h2>
            <p>
              From the first welcome to the last bite, everything has a reason.
            </p>
          </div>
          <div className="value-grid">
            {[
              [
                "01",
                "Fresh ingredients",
                "We work with local producers and seasonal ingredients whenever possible.",
              ],
              [
                "02",
                "Crafted daily",
                "Sauces, breads, desserts and more are made in-house every day.",
              ],
              [
                "03",
                "Warm hospitality",
                "No ceremony. No attitude. Just a genuinely good place to eat.",
              ],
              [
                "04",
                "Locally inspired",
                "Familiar flavors meet modern technique, without losing their soul.",
              ],
            ].map((v) => (
              <div className="value" key={v[0]}>
                <span>{v[0]}</span>
                <h3>{v[1]}</h3>
                <p>{v[2]}</p>
                <ArrowUpRight />
              </div>
            ))}
          </div>
        </section>

        <section className="gallery section" id="gallery">
          <div className="section-head">
            <div>
              <div className="section-label">05 / INSIDE SAVORÉ</div>
              <h2>
                A little <em>look around.</em>
              </h2>
            </div>
            <a className="under-link" href="#contact">
              Follow @savore.restaurant <Instagram size={16} />
            </a>
          </div>
          <div className="gallery-grid">
            {gallery.map((g, i) => (
              <img className={"g" + i} src={g} key={g} />
            ))}
          </div>
        </section>

        <section className="reviews section" id="reviews">
          <div className="review-top">
            <div className="section-label">06 / WORD ON THE STREET</div>
            <div className="stars">★★★★★</div>
          </div>
          <div className="quote">
            “The kind of place where you finish dinner and immediately start
            planning when to come back.”
          </div>
          <div className="review-by">
            <strong>ANANYA S.</strong>
            <span>REGULAR GUEST · 24 VISITS</span>
          </div>
          <div className="review-row">
            {[
              "“Beautiful food, beautiful room, and service that actually feels human.”",
              "“The truffle rigatoni alone is worth the drive. Absolutely loved the atmosphere.”",
              "“Our new favorite date-night spot. Every detail feels considered.”",
            ].map((r, i) => (
              <div key={i}>
                <span>0{i + 1}</span>
                <p>{r}</p>
                <small>VERIFIED GUEST</small>
              </div>
            ))}
          </div>
        </section>

        <section className="reserve" id="reserve">
          <div className="reserve-bg" />
          <div className="reserve-inner">
            <p className="eyebrow">
              <i /> TABLES ARE LIMITED
            </p>
            <h2>
              Your table
              <br />
              <em>is waiting.</em>
            </h2>
            <p>
              Good food tastes better when there's somewhere special to sit.
            </p>
            <div className="reserve-actions">
              <a className="button light" href="tel:+919876543210">
                Reserve a table <ArrowUpRight size={18} />
              </a>
              <a className="outline" href="https://wa.me/919876543210">
                WhatsApp us <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-main">
            <div className="section-label">07 / COME FIND US</div>
            <h2>
              Meet us
              <br />
              <em>at the table.</em>
            </h2>
          </div>
          <div className="contact-grid">
            <div>
              <small>VISIT</small>
              <p>
                17 Riverfront Avenue
                <br />
                Guwahati, Assam 781001
                <br />
                India
              </p>
              <a className="under-link" href="#contact">
                Get directions <ArrowUpRight size={16} />
              </a>
            </div>
            <div>
              <small>OPENING HOURS</small>
              <p>
                Mon — Thu &nbsp; 12:00 — 22:30
                <br />
                Fri — Sun &nbsp; 12:00 — 23:00
              </p>
            </div>
            <div>
              <small>CONTACT</small>
              <p>
                +91 98765 43210
                <br />
                hello@savore.example
              </p>
              <a className="under-link" href="mailto:hello@savore.example">
                Send an email <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="map">
            <div className="map-grid" />
            <div className="pin">
              <MapPin />
              <span>SAVORÉ</span>
            </div>
            <div className="map-label">17 RIVERFRONT AVENUE</div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-top">
          <a className="logo" href="#home">
            SAVOR<span>É</span>
          </a>
          <p>
            Good food. Great moments.
            <br />
            Made for the moments between.
          </p>
          <a className="button light small" href="#reserve">
            Book a table <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SAVORÉ. ALL RIGHTS RESERVED.</span>
          <div>
            <a href="#about">ABOUT</a>
            <a href="#menu">MENU</a>
            <a href="#gallery">GALLERY</a>
            <a href="#contact">CONTACT</a>
          </div>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
