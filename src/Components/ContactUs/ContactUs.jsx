import React from "react";
import style from "./ContactUs.module.scss";
import email from "../../Assets/email.png";

const ContactUs = () => {
  return (
    <div className={style.Container}>
      <div className={style.row}>
        <div className={style.Content}>
          <div className={style.row}>
            <div
              className={style.background}
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className={style.image}></div>
            </div>
            <div
              className={style.ContentContainer}
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className={style.row}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3179/3179068.png"
                  alt=""
                />
                <h5>
                  {" "}
                  BUSINESS IT AND SERVICES PTY LTD T/AS MONEYFIRST , ADD 28
                  HARRIET LANE , OXENFORD QLD 4210, AUSTRALIA
                </h5>
              </div>
              <div className={style.row}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2258/2258843.png"
                  alt=""
                />
                <h5>
                  {" "}
                  ACN :{" "}
                  <a target="_blank" href="https://asic.gov.au/">
                    631 693 126
                  </a>
                </h5>
              </div>
              <div className={style.row}>
                <img src={email} alt="" />
                <h5>
                  <a
                    target="_blank"
                    href="mailto:info@moneyfirst.com.au
                "
                  >
                    info@moneyfirst.com.au
                  </a>
                </h5>
              </div>
              <div className={style.row}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
                  alt=""
                />
                <h5>(7)3184-6424</h5>
              </div>
            </div>
          </div>
        </div>
        <div className={style.Form} data-aos="fade-up" data-aos-duration="3000">
          <h1>SAY HELLO</h1>
          <form action="">
            <input type="text" placeholder="Name" name="" id="" />
            <input type="text" placeholder="Email" name="" id="" />
            <input type="text" placeholder="Phone" name="" id="" />
            <textarea
              name=""
              id=""
              placeholder="Message"
              cols="30"
              rows="5"
            ></textarea>
            <button className={style.contentButton}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
