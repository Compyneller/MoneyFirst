import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className={style.Columns}>
          <h5>ABOUT</h5>
          <p>
            Feel free to contact us. A business has to be involving, it has to
            be fun, and it has to exercise your creative instincts. Start where
            you are. Use what you have. Do what you can.
          </p>
        </div>

        <div className={style.Columns}>
          <h5>COMPANY</h5>
          <Link
            to="/"
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            ABOUT US
          </Link>
          <Link
            to="/privacy"
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            PRIVACY POLICY
          </Link>
          <Link
            to="/refund"
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            REFUND POLICY
          </Link>

          <Link
            to="/term"
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            TERM & CONDITION
          </Link>
        </div>

        <div className={style.Columns} style={{ margin: "auto 0" }}>
          <div className={style.row2}>
            <a target="_blank" href="https://twitter.com/moneyfirstau?s=08">
              <img
                src="https://icons8.com/vue-static/landings/animated-icons/icons/twit-flying/twit-flying_200.gif"
                alt=""
              />
            </a>
            <a target="_blank" href="https://www.instagram.com/moneyfirst_au/">
              <img
                src="https://img.icons8.com/ios/2x/instagram-new--v3.gif"
                alt=""
              />
            </a>
            <a target="_blank" href="https://www.facebook.com/MoneyfirstAu">
              <img
                src="https://icons8.com/vue-static/landings/animated-icons/icons/facebook/facebook_200.gif"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <h5 style={{ marginTop: "5rem", textAlign: "center" }}>
        © COPYRIGHT 2020. ALL RIGHTS RESERVED.
      </h5>
    </div>
  );
};

export default Footer;
