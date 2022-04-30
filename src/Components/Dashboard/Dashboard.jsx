import React from "react";
import style from "./Dashboard.module.scss";
import video from "../../Assets/Payment Information-bro.png";

const Dashboard = () => {
  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className={style.Content} data-aos="fade-right">
          <div className={style.ContentContainer}>
            <h1>
              <span style={{ color: "orangered" }}>Moneyfirst</span> provides
              you exceptional services where you will get the best experience of
              sending INR(D) to your loved ones at zero charges! We also have a
              Super Wallet where you can add as low as AUD 1 and as high as AUD
              50,000 anytime.
            </h1>
            {/* <button className={style.contentButton}>Start</button> */}
          </div>
        </div>
        <div className={style.ImageContainer} data-aos="fade-left">
          <div className={style.Image}></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
