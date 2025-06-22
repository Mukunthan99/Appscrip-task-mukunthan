import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  const UpArrow = "/icons/arrow-up.png";
  const DownArrow = "/icons/arrow-down.png";

  const [open, setOpen] = React.useState({
    muse: false,
    quickLinks: false,
    follow: false,
  });

  const toggleSection = (section) => {
    setOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <div className={styles.subscribe}>
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <div className={styles.subscribeForm}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.contactAndCurrency}>
          <h4>CALL US</h4>
          <div className={styles.contact}>
            <p>+44 221 133 5360</p>
            <span className={styles.seperater}></span>
            <p>customercare@mettamuse.com</p>
          </div>

          <div className={styles.currencyContainer}>
            <h4>CURRENCY</h4>
            <div className={styles.currency}>
              <Image
                src="/icons/us-flag.png"
                alt="US Flag"
                width={20}
                height={20}
              />
              <span className={styles.seperater}></span>
              <span> USD</span>
            </div>
            <p className={styles.currencyNote}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop View Navigation Links */}
      <div className={styles.desktopLinks}>
        <div className={styles.linkGroup}>
          <h4>mettā muse</h4>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
        </div>
        <div className={styles.linkGroup}>
          <h4>QUICK LINKS</h4>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className={styles.linkGroup}>
          <h4>FOLLOW US</h4>
          <div className={styles.socialIcons}>
            <Image
              src="/icons/Insta.png"
              alt="Instagram"
              width={24}
              height={24}
            />
            <Image
              src="/icons/linkedin.png"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </div>

          <h4>mettā muse ACCEPTS</h4>
          <div className={styles.paymentIcons}>
            <Image
              src="/icons/Gpay.png"
              alt="Google Pay"
              width={56}
              height={35}
            />
            <Image
              src="/icons/mastercard.png"
              alt="Mastercard"
              width={56}
              height={35}
            />
            <Image
              src="/icons/paypal.png"
              alt="PayPal"
              width={56}
              height={35}
            />
            <Image src="/icons/amex.png" alt="Amex" width={56} height={35} />
            <Image
              src="/icons/apple-pay.png"
              alt="Apple Pay"
              width={56}
              height={35}
            />
            <Image
              src="/icons/purple-pay.png"
              alt="Purple Pay"
              width={56}
              height={35}
            />
          </div>
        </div>
      </div>

      {/* Mobile View Collapsibles */}
      <div className={styles.mobileSection}>
        <div className={styles.collapsible}>
          <button onClick={() => toggleSection("muse")}>
            mettā muse{" "}
            <Image
              src={open.muse ? UpArrow : DownArrow}
              width={16}
              height={16}
              alt="arrow"
            />
          </button>
          {open.muse && (
            <div className={styles.menu}>
              <p>About Us</p>
              <p>Stories</p>
              <p>Artisans</p>
              <p>Boutiques</p>
              <p>Contact Us</p>
              <p>EU Compliances Docs</p>
            </div>
          )}
        </div>

        <div className={styles.collapsible}>
          <button onClick={() => toggleSection("quickLinks")}>
            QUICK LINKS{" "}
            <Image
              src={open.quickLinks ? UpArrow : DownArrow}
              width={16}
              height={16}
              alt="arrow"
            />
          </button>
          {open.quickLinks && (
            <div className={styles.menu}>
              <p>Orders & Shipping</p>
              <p>Join/Login as a Seller</p>
              <p>Payment & Pricing</p>
              <p>Return & Refunds</p>
              <p>FAQs</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          )}
        </div>

        <div className={styles.collapsible}>
          <button onClick={() => toggleSection("follow")}>
            FOLLOW US{" "}
            <Image
              src={open.follow ? UpArrow : DownArrow}
              width={16}
              height={16}
              alt="arrow"
            />
          </button>
          {open.follow && (
            <div className={styles.menu}>
              <Image
                src="/icons/Insta.png"
                alt="Instagram"
                width={24}
                height={24}
              />
              <Image
                src="/icons/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </div>
          )}
        </div>
        <h4>mettā muse ACCEPTS</h4>

        <div className={styles.paymentIcons}>
          <Image
            src="/icons/Gpay.png"
            alt="Google Pay"
            width={50}
            height={35}
          />
          <Image
            src="/icons/mastercard.png"
            alt="Mastercard"
            width={50}
            height={35}
          />
          <Image src="/icons/paypal.png" alt="PayPal" width={50} height={35} />
          <Image src="/icons/amex.png" alt="Amex" width={50} height={35} />
          <Image
            src="/icons/apple-pay.png"
            alt="Apple Pay"
            width={50}
            height={35}
          />
          <Image
            src="/icons/purple-pay.png"
            alt="Purple Pay"
            width={50}
            height={35}
          />
        </div>
      </div>

      <p className={styles.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
