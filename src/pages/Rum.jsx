import { useEffect } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

import logo from "../assets/images/boombangh logo.jpeg";
import bottle from "../assets/images/bottle.jpeg";

import "./Rum.css";

function Rum() {
  useEffect(() => {
    document.title = "The Rum | BoomBaangh Caribbean Rum";

    const description =
      "Discover The Good Boom Baangh Caribbean Rum and the Caribbean spirit behind BoomBaangh.";

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", description);

    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = "https://boombangh-website.vercel.app/rum";

    return () => {
      document.title = "BoomBaangh | The Good Boom Baangh Caribbean Rum";
    };
  }, []);

  return (
    <div className="rum-page">
      {/* NAVIGATION */}
      <header className="rum-nav">
        <a href="/" className="rum-nav-brand" aria-label="BoomBaangh home">
          <img src={logo} alt="BoomBaangh logo" />
        </a>

        <nav className="rum-nav-links">
          <a href="/">Home</a>
          <a href="/story">Story</a>
          <a href="/rum" className="active">
            The Rum
          </a>
          <a href="/#find-us">Find Us</a>
        </nav>

        <a href="/#follow" className="rum-nav-social">
          Follow
          <ArrowUpRight size={15} />
        </a>
      </header>

      {/* HERO */}
      <main>
        <section className="rum-hero">
          <div className="rum-hero-background">
            <div className="rum-hero-grid" />
          </div>

          <div className="rum-hero-content">
            <div className="rum-hero-copy">
              <div className="rum-label">
                <span className="rum-label-line" />
                THE GOOD BOOM BAANGH
              </div>

              <h1>
                THE
                <br />
                <span>RUM.</span>
              </h1>

              <p className="rum-hero-description">
                Caribbean spirit.
                <br />
                Bold character.
                <br />
                Pure BoomBaangh.
              </p>

              <div className="rum-hero-meta">
                <div className="rum-abv">
                  <strong>40%</strong>
                  <span>ALC</span>
                </div>

                <div className="rum-meta-divider" />

                <p>THE GOOD BOOM BAANGH<br />CARIBBEAN RUM</p>
              </div>
            </div>

            <div className="rum-product">
              <div className="rum-product-top">
                <span>THE ORIGINAL</span>
                <span>CARIBBEAN RUM</span>
              </div>

              <div className="rum-product-stage">
                <div className="rum-product-glow" />
                <div className="rum-product-ring ring-one" />
                <div className="rum-product-ring ring-two" />

                <div className="rum-product-shadow" />

                <img
                  src={bottle}
                  alt="The Good Boom Baangh Caribbean Rum bottle"
                  className="rum-product-bottle"
                />
              </div>

              <div className="rum-product-bottom">
                <span>BOOMBAANGH</span>
                <span>THE GOOD RUM</span>
              </div>
            </div>
          </div>

          <a href="#heritage" className="rum-hero-scroll">
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown size={17} />
          </a>

          <div className="rum-hero-side">01 / THE RUM</div>
        </section>

        {/* INTRO */}
        <section className="rum-intro-section">
          <div className="rum-section-marker">
            <span>01</span>
            <span>THE SPIRIT</span>
          </div>

          <div className="rum-intro-main">
            <p className="rum-kicker">THE GOOD RUM. THE REAL RUM.</p>

            <h2>
              A SPIRIT
              <br />
              WITH A
              <br />
              <em>STORY.</em>
            </h2>
          </div>

          <div className="rum-intro-text">
            <p className="rum-intro-large">
              We chose to craft Boombaangh with real Caribbean rum, including
              from the legendary islands of Barbados.
            </p>

            <p>
              This is where the character of BoomBaangh begins — with the
              heritage and spirit of Caribbean rum.
            </p>
          </div>
        </section>

        {/* HERITAGE */}
        <section className="rum-heritage" id="heritage">
          <div className="rum-heritage-image">
            <div className="rum-heritage-number">02</div>

            <div className="rum-heritage-frame">
              <div className="rum-heritage-circle" />

              <img
                src={bottle}
                alt="BoomBaangh Caribbean Rum"
                className="rum-heritage-bottle"
              />

              <div className="rum-heritage-caption">
                <span>BOOMBAANGH</span>
                <span>CARIBBEAN RUM</span>
              </div>
            </div>
          </div>

          <div className="rum-heritage-content">
            <p className="rum-kicker">THE HERITAGE</p>

            <h2>
              ROOTED
              <br />
              IN THE
              <br />
              <span>CARIBBEAN.</span>
            </h2>

            <div className="rum-copy">
              <p>
                BoomBaangh is inspired by the centuries-old tradition of
                Caribbean rum-making.
              </p>

              <p>
                Barbados carries a particularly important place in rum
                history. Its island heritage forms part of the story behind
                the spirit that inspired BoomBaangh.
              </p>

              <p>
                The result is a modern expression built around the bold
                character and unmistakable energy of Caribbean rum.
              </p>
            </div>
          </div>
        </section>

        {/* STATEMENT */}
        <section className="rum-statement">
          <div className="rum-statement-inner">
            <p className="rum-kicker">THE BOOMBAANGH PHILOSOPHY</p>

            <h2>
              FLAVOUR
              <br />
              <span>& FIRE.</span>
            </h2>

            <div className="rum-statement-bottom">
              <p>
                BoomBaangh isn't just a drink — it's a celebration of flavour
                and fire.
              </p>

              <span>03 / THE SPIRIT</span>
            </div>
          </div>
        </section>

        {/* CHARACTER */}
        <section className="rum-character">
          <div className="rum-character-heading">
            <p className="rum-kicker">THE CHARACTER</p>

            <h2>
              BOLD.
              <br />
              REAL.
              <br />
              <span>CARIBBEAN.</span>
            </h2>
          </div>

          <div className="rum-character-details">
            <div className="rum-character-intro">
              <p>
                Crafted for those who seek the good rum, the real rum.
              </p>

              <p>
                Every part of the BoomBaangh identity is built around a simple
                idea: celebrate the spirit, the history and the attitude of
                Caribbean rum.
              </p>
            </div>

            <div className="rum-facts">
              <div className="rum-fact">
                <span>01</span>
                <div>
                  <strong>CARIBBEAN RUM</strong>
                  <p>Inspired by the spirit of the Caribbean.</p>
                </div>
              </div>

              <div className="rum-fact">
                <span>02</span>
                <div>
                  <strong>BARBADOS</strong>
                  <p>Part of the heritage behind the spirit.</p>
                </div>
              </div>

              <div className="rum-fact">
                <span>03</span>
                <div>
                  <strong>40% ALC</strong>
                  <p>The strength stated on the bottle.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SIGNATURE */}
        <section className="rum-signature">
          <div className="rum-signature-top">
            <span>04</span>
            <span>THE SIGNATURE</span>
          </div>

          <div className="rum-signature-main">
            <p className="rum-kicker">THE LINE THAT STARTED IT</p>

            <h2>
              READY.
              <br />
              READY.
              <br />
              <span>BOOMBAANGH.</span>
            </h2>
          </div>

          <div className="rum-signature-bottom">
            <p>THE GOOD RUM. THE REAL RUM.</p>

            <a href="/#home">
              BACK TO BOOMBAANGH
              <ChevronRight size={16} />
            </a>
          </div>
        </section>

        {/* CONNECT */}
        <section className="rum-connect">
          <div className="rum-connect-heading">
            <p className="rum-kicker">KEEP UP WITH BOOMBAANGH</p>

            <h2>
              STAY
              <br />
              <span>READY.</span>
            </h2>
          </div>

          <div className="rum-connect-links">
            <a
              href="https://www.instagram.com/boombaangh_team"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={20} />
              <span>Instagram</span>
              <ArrowUpRight size={18} />
            </a>

            <a
              href="https://youtube.com/@boombaangh"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube size={20} />
              <span>YouTube</span>
              <ArrowUpRight size={18} />
            </a>

            <a
              href="https://www.facebook.com/share/1BsdfLhqjP/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF size={18} />
              <span>Facebook</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="rum-footer">
        <div className="rum-footer-brand">
          <img src={logo} alt="BoomBaangh" />
          <div>
            <strong>BOOMBAANGH</strong>
            <span>THE GOOD BOOM BAANGH CARIBBEAN RUM</span>
          </div>
        </div>

        <div className="rum-footer-right">
          <span>40% ALC</span>
          <span>PLEASE DRINK RESPONSIBLY. 18+ ONLY.</span>
        </div>
      </footer>
    </div>
  );
}

export default Rum;