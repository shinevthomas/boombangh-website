import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import gsap from "gsap";

import logo from "./assets/images/boombangh logo.jpeg";
import bottle from "./assets/images/bottle.jpeg";

import "./App.css";


function App() {
  const introRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* =========================================================
     SOCIAL LINKS
     ========================================================= */

  const socialLinks = {
    instagram:
      "https://www.instagram.com/boombaangh_team?stkn=YTNmbjU3dWk1ajYz",

    facebook:
      "https://www.facebook.com/share/1BsdfLhqjP/",

    youtube:
      "https://youtube.com/@boombaangh?si=YV8Djcvtg3HFxH9o",
  };


  /* =========================================================
     NAVIGATION
     ========================================================= */

  const navigation = [
    {
      label: "Story",
      target: "story",
    },
    {
      label: "The Rum",
      target: "rum",
    },
    {
      label: "Find Us",
      target: "locations",
    },
    {
      label: "Founder",
      target: "founder",
    },
    {
      label: "Follow",
      target: "follow",
    },
  ];


  /* =========================================================
     SCROLL EFFECT
     ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  /* =========================================================
     CLOSE MOBILE MENU
     ========================================================= */

  const handleNavigation = (target) => {
    setMenuOpen(false);

    const element = document.getElementById(target);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  /* =========================================================
     CINEMATIC READY READY BOOMBAANGH ANIMATION
     ========================================================= */

  useEffect(() => {
    const intro = introRef.current;

    if (!intro) return;

    const eyebrow = intro.querySelector(".intro-eyebrow");
    const readyOne = intro.querySelector(".intro-ready-one");
    const readyTwo = intro.querySelector(".intro-ready-two");
    const boom = intro.querySelector(".intro-boom");
    const line = intro.querySelector(".intro-line");
    const tagline = intro.querySelector(".intro-tagline");

    const timeline = gsap.timeline({
      defaults: {
        ease: "power4.out",
      },
    });


    /* Initial state */

    gsap.set(eyebrow, {
      opacity: 0,
      y: 20,
    });

    gsap.set(readyOne, {
      opacity: 0,
      y: 70,
    });

    gsap.set(readyTwo, {
      opacity: 0,
      y: 70,
    });

    gsap.set(boom, {
      opacity: 0,
      y: 90,
      scale: 0.82,
    });

    gsap.set(line, {
      opacity: 0,
      scaleX: 0,
    });

    gsap.set(tagline, {
      opacity: 0,
      y: 20,
    });


    /* Animation sequence */

    timeline.to(eyebrow, {
      opacity: 1,
      y: 0,
      duration: 0.7,
    });

    timeline.to(
      readyOne,
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
      },
      "+=0.15"
    );

    timeline.to(
      readyTwo,
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
      },
      "-=0.45"
    );

    timeline.to(
      boom,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power4.out",
      },
      "+=0.1"
    );

    timeline.to(
      line,
      {
        opacity: 1,
        scaleX: 1,
        duration: 0.8,
      },
      "-=0.4"
    );

    timeline.to(
      tagline,
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
      },
      "-=0.2"
    );


    return () => {
      timeline.kill();
    };
  }, []);


  return (
    <div className="site">


      {/* =====================================================
          NAVBAR
          ===================================================== */}

      <header
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="navbar-inner">


          {/* LOGO */}

          <button
            className="nav-logo"
            onClick={() => handleNavigation("home")}
            aria-label="Go to home"
          >
            <img
              src={logo}
              alt="BoomBaangh"
            />
          </button>


          {/* DESKTOP NAVIGATION */}

          <nav className="nav-links">

            {navigation.map((item) => (
              <button
                key={item.target}
                onClick={() =>
                  handleNavigation(item.target)
                }
              >
                {item.label}
              </button>
            ))}

          </nav>


          {/* DESKTOP SOCIAL ICONS */}

          <div className="nav-socials">

            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>

          </div>


          {/* MOBILE MENU BUTTON */}

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

        </div>


        {/* MOBILE MENU */}

        <div
          className={`mobile-menu ${
            menuOpen ? "mobile-menu-open" : ""
          }`}
        >

          <div className="mobile-menu-links">

            {navigation.map((item) => (
              <button
                key={item.target}
                onClick={() =>
                  handleNavigation(item.target)
                }
              >
                <span>{item.label}</span>
                <ArrowUpRight size={18} />
              </button>
            ))}

          </div>


          <div className="mobile-socials">

            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>

          </div>

        </div>

      </header>



      {/* =====================================================
          HERO
          ===================================================== */}

      <main>


        <section
          className="hero"
          id="home"
        >

          <div className="hero-background-grid"></div>

          <div className="hero-orange-glow"></div>


          <div className="hero-inner">


            {/* HERO COPY */}

            <div className="hero-copy">

              <p className="hero-eyebrow">
                THE GOOD
              </p>

              <h1>
                CARIBBEAN
                <span>RUM.</span>
              </h1>

              <p className="hero-description">
                A celebration of flavour and fire.
                Crafted for those who seek the good
                rum, the real rum.
              </p>


              <button
                className="hero-discover"
                onClick={() =>
                  handleNavigation("story")
                }
              >
                <span>DISCOVER THE STORY</span>

                <ArrowDown size={16} />

              </button>

            </div>


            {/* BOTTLE */}

            <div className="hero-product">

              <div className="hero-bottle-glow"></div>

              <div className="hero-bottle-stage">

                <img
                  src={bottle}
                  alt="The Good BoomBaangh Caribbean Rum bottle"
                  className="hero-bottle"
                />

              </div>


              {/* ABV */}

              <div className="abv-card">

                <strong>40%</strong>

                <span>ALC / VOL</span>

              </div>


              <div className="hero-product-label">
                BOOMBAANGH
                <span>THE GOOD CARIBBEAN RUM</span>
              </div>

            </div>

          </div>


          {/* SCROLL INDICATOR */}

          <div className="hero-scroll">

            <span>SCROLL TO EXPLORE</span>

            <ArrowDown size={15} />

          </div>

        </section>



        {/* =====================================================
            CINEMATIC SIGNATURE
            READY. READY. BOOMBAANGH.
            ===================================================== */}

        <section
          className="signature-intro"
          ref={introRef}
        >

          <div className="signature-noise"></div>

          <div className="signature-glow"></div>


          <div className="signature-content">

            <p className="intro-eyebrow">
              THE SIGNATURE
            </p>


            <div className="intro-words">

              <div className="intro-word intro-ready-one">
                READY.
              </div>

              <div className="intro-word intro-ready-two">
                READY.
              </div>

              <div className="intro-word intro-boom">
                BOOMBAANGH.
              </div>

            </div>


            <div className="intro-line"></div>


            <p className="intro-tagline">
              THE GOOD RUM. THE REAL RUM.
            </p>

          </div>

        </section>



        {/* =====================================================
            STORY
            ===================================================== */}

        <section
          className="story-section"
          id="story"
        >

          <div className="section-container">


            <div className="section-label">
              01 / THE STORY
            </div>


            <div className="story-grid">


              <div className="story-heading">

                <p>
                  BORN FROM
                  <br />
                  THE SPIRIT
                  <br />
                  OF THE
                  <span>CARIBBEAN.</span>
                </p>

              </div>


              <div className="story-content">

                <p className="story-lead">
                  We chose to craft Boombaangh
                  with real Caribbean rum,
                  including from the legendary
                  islands of Barbados, where rum
                  was born and barrels once fueled
                  the spirit of the high seas.
                </p>


                <p>
                  This is where pirates traded gold
                  for liquid fire and islanders
                  perfected the craft over centuries.
                  Our blend honours that bold
                  history, capturing the true soul
                  of the Caribbean with every pour.
                </p>


                <p>
                  BoomBaangh isn't just a drink —
                  it's a celebration of flavour and
                  fire. Crafted for those who seek
                  the good rum, the real rum.
                </p>


                <div className="story-signature">
                  <span>THE GOOD</span>
                  <strong>BOOMBAANGH.</strong>
                </div>

              </div>

            </div>

          </div>

        </section>



        {/* =====================================================
            THE RUM
            ===================================================== */}

        <section
          className="rum-section"
          id="rum"
        >

          <div className="rum-background-word">
            RUM
          </div>


          <div className="section-container">

            <div className="section-label">
              02 / THE RUM
            </div>


            <div className="rum-grid">


              {/* BOTTLE */}

              <div className="rum-product">

                <div className="rum-bottle-ring"></div>

                <img
                  src={bottle}
                  alt="BoomBaangh Caribbean Rum"
                  className="rum-bottle"
                />

              </div>


              {/* DETAILS */}

              <div className="rum-copy">

                <p className="rum-eyebrow">
                  THE GOOD BOOMBAANGH
                </p>


                <h2>
                  CARIBBEAN
                  <span>HERITAGE.</span>
                </h2>


                <p className="rum-description">
                  The spirit inside the bottle
                  carries the character and
                  heritage of traditional Caribbean
                  rum-making.
                </p>


                <div className="rum-specs">

                  <div className="rum-spec">

                    <span>ABV</span>

                    <strong>40%</strong>

                  </div>


                  <div className="rum-spec">

                    <span>STYLE</span>

                    <strong>
                      CARIBBEAN RUM
                    </strong>

                  </div>


                  <div className="rum-spec">

                    <span>SPIRIT</span>

                    <strong>
                      THE GOOD RUM
                    </strong>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>



        {/* =====================================================
            WHERE TO FIND US
            ===================================================== */}

        <section
          className="locations-section"
          id="locations"
        >

          <div className="locations-glow"></div>


          <div className="section-container">


            <div className="section-label">
              03 / WHERE TO FIND US
            </div>


            <div className="locations-header">

              <div>

                <p className="locations-eyebrow">
                  FIND THE BANG
                </p>

                <h2>
                  WHERE CAN
                  <br />
                  YOU FIND
                  <span>BOOMBAANGH RUM?</span>
                </h2>

              </div>


              <p className="locations-intro">
                BoomBaangh is making its way
                across the world. Start your
                journey in New Zealand.
              </p>

            </div>


            {/* COUNTRY CARD */}

            <div className="country-card">


              <div className="country-top">

                <div className="country-number">
                  01
                </div>


                <div className="country-name">

                  <span>AVAILABLE IN</span>

                  <h3>
                    NEW ZEALAND
                  </h3>

                </div>


                <div className="country-status">
                  AVAILABLE
                </div>

              </div>


              {/* SHOPS */}

              <div className="retailers-grid">


                <div className="retailer-card">

                  <span>01</span>

                  <h4>
                    Thirsty Liquor
                  </h4>

                  <p>
                    New Zealand
                  </p>

                </div>


                <div className="retailer-card">

                  <span>02</span>

                  <h4>
                    Super Liquor
                  </h4>

                  <p>
                    New Zealand
                  </p>

                </div>


                <div className="retailer-card">

                  <span>03</span>

                  <h4>
                    Black Bull Papatoetoe
                  </h4>

                  <p>
                    Papatoetoe, New Zealand
                  </p>

                </div>


                <div className="retailer-card">

                  <span>04</span>

                  <h4>
                    Fine-O-Wine
                  </h4>

                  <p>
                    New Zealand
                  </p>

                </div>


                <div className="retailer-card">

                  <span>05</span>

                  <h4>
                    Liquorland
                  </h4>

                  <p>
                    New Zealand
                  </p>

                </div>

              </div>


              {/* COUNTRY FOOTER */}

              <div className="country-footer">

                <span>
                  NEW ZEALAND
                </span>

                <span>
                  05 LOCATIONS
                </span>

              </div>

            </div>


            {/* COMING SOON */}

            <div className="coming-soon">

              <div className="coming-soon-mark">
                +
              </div>


              <div className="coming-soon-copy">

                <span>
                  THE JOURNEY CONTINUES
                </span>

                <h3>
                  MORE COUNTRIES
                  <strong>COMING SOON.</strong>
                </h3>

                <p>
                  BoomBaangh is expanding its
                  presence around the world.
                  More countries and locations
                  will be announced soon.
                </p>

              </div>


              <div className="coming-soon-line"></div>

            </div>


          </div>

        </section>



        {/* =====================================================
            FOUNDER
            ===================================================== */}

        <section
          className="founder-section"
          id="founder"
        >

          <div className="section-container">


            <div className="section-label">
              04 / THE FOUNDER
            </div>


            <div className="founder-grid">


              {/* FOUNDER IMAGE */}

              <div className="founder-image-wrap">

                <div className="founder-image-frame"></div>

                <img
                  src="/founder.jpeg"
                  alt="BoomBaangh founder"
                  className="founder-image"
                />

                <div className="founder-image-label">
                  BOOMBAANGH
                </div>

              </div>


              {/* FOUNDER COPY */}

              <div className="founder-copy">

                <p className="founder-eyebrow">
                  THE MAN BEHIND THE BANG
                </p>


                <h2>
                  BUILT WITH
                  <span>
                    PASSION.
                  </span>
                </h2>


                <p className="founder-lead">
                  BoomBaangh is more than a bottle.
                  It is a spirit built around flavour,
                  character and the pursuit of good
                  rum.
                </p>


                <p>
                  From its Caribbean heritage to its
                  modern identity, BoomBaangh brings
                  together a bold attitude and a love
                  for the spirit.
                </p>


                <div className="founder-quote">

                  <span>THE WORDS</span>

                  <strong>
                    “READY. READY.
                    <br />
                    BOOMBAANGH.”
                  </strong>

                </div>

              </div>

            </div>

          </div>

        </section>



        {/* =====================================================
            BRAND STATEMENT
            ===================================================== */}

        <section className="statement-section">

          <div className="statement-background">
            BOOMBAANGH
          </div>


          <div className="statement-content">

            <p>
              GOOD RUM.
            </p>

            <p>
              REAL
              <span>SPIRIT.</span>
            </p>

          </div>

        </section>



        {/* =====================================================
            FOLLOW
            ===================================================== */}

        <section
          className="follow-section"
          id="follow"
        >

          <div className="section-container">


            <div className="section-label">
              05 / FOLLOW THE BANG
            </div>


            <div className="follow-grid">


              <div className="follow-heading">

                <p>
                  FOLLOW
                  <br />
                  THE
                  <span>BANG.</span>
                </p>

              </div>


              <div className="follow-content">

                <p>
                  Follow BoomBaangh and join
                  the journey as the good rum
                  makes its way around the world.
                </p>


                <div className="social-cards">


                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="social-card"
                  >

                    <div className="social-icon">
                      <FaInstagram />
                    </div>

                    <div>
                      <span>FOLLOW US</span>

                      <strong>
                        INSTAGRAM
                      </strong>
                    </div>

                    <ArrowUpRight size={20} />

                  </a>


                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="social-card"
                  >

                    <div className="social-icon">
                      <FaFacebookF />
                    </div>

                    <div>
                      <span>CONNECT WITH US</span>

                      <strong>
                        FACEBOOK
                      </strong>
                    </div>

                    <ArrowUpRight size={20} />

                  </a>


                  <a
                    href={socialLinks.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="social-card"
                  >

                    <div className="social-icon">
                      <FaYoutube />
                    </div>

                    <div>
                      <span>WATCH US</span>

                      <strong>
                        YOUTUBE
                      </strong>
                    </div>

                    <ArrowUpRight size={20} />

                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>



        {/* =====================================================
            FOOTER
            ===================================================== */}

        <footer className="footer">

          <div className="footer-container">


            <div className="footer-brand">

              <img
                src={logo}
                alt="BoomBaangh"
              />

              <p>
                THE GOOD BOOMBAANGH
                <br />
                CARIBBEAN RUM.
              </p>

            </div>


            <div className="footer-navigation">

              <span>
                EXPLORE
              </span>

              <button
                onClick={() =>
                  handleNavigation("story")
                }
              >
                Story
              </button>

              <button
                onClick={() =>
                  handleNavigation("rum")
                }
              >
                The Rum
              </button>

              <button
                onClick={() =>
                  handleNavigation("locations")
                }
              >
                Find Us
              </button>

              <button
                onClick={() =>
                  handleNavigation("founder")
                }
              >
                Founder
              </button>

            </div>


            <div className="footer-social">

              <span>
                FOLLOW
              </span>

              <div>

                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>

                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>

              </div>

            </div>


          </div>


          <div className="footer-bottom">

            <span>
              © {new Date().getFullYear()} BOOMBAANGH.
              ALL RIGHTS RESERVED.
            </span>

            <span>
              PLEASE DRINK RESPONSIBLY.
            </span>

            <span>
              40% ALC / VOL
            </span>

          </div>

        </footer>


      </main>

    </div>
  );
}

export default App;