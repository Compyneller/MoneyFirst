import React from "react";
import logo from "../../Assets/oie_ECrDmmYizNQI.png";
import style from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={style.NavBarNav}>
      <div className={style.navBarContent}>
        <img src={logo} alt="" />
        <svg
          className={style.logo}
          width="757"
          height="102"
          viewBox="0 0 757 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="path-1-outside-1_2_2"
            maskUnits="userSpaceOnUse"
            x="0.855988"
            y="0.631989"
            width="756"
            height="102"
            fill="black"
          >
            <rect
              fill="white"
              x="0.855988"
              y="0.631989"
              width="756"
              height="102"
            />
            <path d="M96.352 7.42399V96H84.704V29.952L55.264 96H47.072L17.504 29.824V96H5.85599V7.42399H18.4L51.168 80.64L83.936 7.42399H96.352Z" />
            <path d="M156.554 96.896C148.277 96.896 140.725 94.976 133.898 91.136C127.071 87.2107 121.653 81.792 117.642 74.88C113.717 67.8827 111.754 60.032 111.754 51.328C111.754 42.624 113.717 34.816 117.642 27.904C121.653 20.9067 127.071 15.488 133.898 11.648C140.725 7.72265 148.277 5.75999 156.554 5.75999C164.917 5.75999 172.511 7.72265 179.338 11.648C186.165 15.488 191.541 20.864 195.466 27.776C199.391 34.688 201.354 42.5387 201.354 51.328C201.354 60.1173 199.391 67.968 195.466 74.88C191.541 81.792 186.165 87.2107 179.338 91.136C172.511 94.976 164.917 96.896 156.554 96.896ZM156.554 86.784C162.783 86.784 168.373 85.3333 173.322 82.432C178.357 79.5307 182.282 75.392 185.098 70.016C187.999 64.64 189.45 58.4107 189.45 51.328C189.45 44.16 187.999 37.9307 185.098 32.64C182.282 27.264 178.399 23.1253 173.45 20.224C168.501 17.3227 162.869 15.872 156.554 15.872C150.239 15.872 144.607 17.3227 139.658 20.224C134.709 23.1253 130.783 27.264 127.882 32.64C125.066 37.9307 123.658 44.16 123.658 51.328C123.658 58.4107 125.066 64.64 127.882 70.016C130.783 75.392 134.709 79.5307 139.658 82.432C144.693 85.3333 150.325 86.784 156.554 86.784Z" />
            <path d="M286.875 96H275.227L228.379 24.96V96H216.731V6.65599H228.379L275.227 77.568V6.65599H286.875V96Z" />
            <path d="M318.379 16.256V46.08H350.891V55.68H318.379V86.4H354.731V96H306.731V6.65599H354.731V16.256H318.379Z" />
            <path d="M434.82 6.78399L405.764 62.336V96H394.116V62.336L364.932 6.78399H377.86L399.876 51.968L421.892 6.78399H434.82Z" />
            <path d="M497.538 6.78399V16.256H458.754V46.336H490.242V55.808H458.754V96H447.106V6.78399H497.538Z" />
            <path d="M523.254 6.78399V96H511.606V6.78399H523.254Z" />
            <path d="M590.082 96L568.834 59.52H554.754V96H543.106V6.78399H571.906C578.647 6.78399 584.322 7.93599 588.93 10.24C593.623 12.544 597.122 15.6587 599.426 19.584C601.73 23.5093 602.882 27.9893 602.882 33.024C602.882 39.168 601.09 44.5867 597.506 49.28C594.007 53.9733 588.717 57.088 581.634 58.624L604.034 96H590.082ZM554.754 50.176H571.906C578.221 50.176 582.957 48.64 586.114 45.568C589.271 42.4107 590.85 38.2293 590.85 33.024C590.85 27.7333 589.271 23.6373 586.114 20.736C583.042 17.8347 578.306 16.384 571.906 16.384H554.754V50.176Z" />
            <path d="M649.269 96.896C643.381 96.896 638.09 95.872 633.397 93.824C628.789 91.6907 625.162 88.7893 622.517 85.12C619.872 81.3653 618.506 77.056 618.421 72.192H630.837C631.264 76.3733 632.97 79.9147 635.957 82.816C639.029 85.632 643.466 87.04 649.269 87.04C654.816 87.04 659.168 85.6747 662.325 82.944C665.568 80.128 667.189 76.544 667.189 72.192C667.189 68.7787 666.25 66.0053 664.373 63.872C662.496 61.7387 660.149 60.1173 657.333 59.008C654.517 57.8987 650.72 56.704 645.941 55.424C640.053 53.888 635.317 52.352 631.733 50.816C628.234 49.28 625.205 46.8907 622.645 43.648C620.17 40.32 618.933 35.8827 618.933 30.336C618.933 25.472 620.17 21.1627 622.645 17.408C625.12 13.6533 628.576 10.752 633.013 8.70399C637.536 6.65599 642.698 5.63199 648.501 5.63199C656.864 5.63199 663.69 7.72266 668.981 11.904C674.357 16.0853 677.386 21.632 678.069 28.544H665.269C664.842 25.1307 663.05 22.144 659.893 19.584C656.736 16.9387 652.554 15.616 647.349 15.616C642.485 15.616 638.517 16.896 635.445 19.456C632.373 21.9307 630.837 25.4293 630.837 29.952C630.837 33.1947 631.733 35.84 633.525 37.888C635.402 39.936 637.664 41.5147 640.309 42.624C643.04 43.648 646.837 44.8427 651.701 46.208C657.589 47.8293 662.325 49.4507 665.909 51.072C669.493 52.608 672.565 55.04 675.125 58.368C677.685 61.6107 678.965 66.048 678.965 71.68C678.965 76.032 677.813 80.128 675.509 83.968C673.205 87.808 669.792 90.9227 665.269 93.312C660.746 95.7013 655.413 96.896 649.269 96.896Z" />
            <path d="M751.018 6.78399V16.256H726.698V96H715.05V16.256H690.602V6.78399H751.018Z" />
          </mask>
          <path
            d="M96.352 7.42399V96H84.704V29.952L55.264 96H47.072L17.504 29.824V96H5.85599V7.42399H18.4L51.168 80.64L83.936 7.42399H96.352Z"
            stroke="black"
            stroke-width="10"
            mask="url(#path-1-outside-1_2_2)"
          />
          <path
            d="M156.554 96.896C148.277 96.896 140.725 94.976 133.898 91.136C127.071 87.2107 121.653 81.792 117.642 74.88C113.717 67.8827 111.754 60.032 111.754 51.328C111.754 42.624 113.717 34.816 117.642 27.904C121.653 20.9067 127.071 15.488 133.898 11.648C140.725 7.72265 148.277 5.75999 156.554 5.75999C164.917 5.75999 172.511 7.72265 179.338 11.648C186.165 15.488 191.541 20.864 195.466 27.776C199.391 34.688 201.354 42.5387 201.354 51.328C201.354 60.1173 199.391 67.968 195.466 74.88C191.541 81.792 186.165 87.2107 179.338 91.136C172.511 94.976 164.917 96.896 156.554 96.896ZM156.554 86.784C162.783 86.784 168.373 85.3333 173.322 82.432C178.357 79.5307 182.282 75.392 185.098 70.016C187.999 64.64 189.45 58.4107 189.45 51.328C189.45 44.16 187.999 37.9307 185.098 32.64C182.282 27.264 178.399 23.1253 173.45 20.224C168.501 17.3227 162.869 15.872 156.554 15.872C150.239 15.872 144.607 17.3227 139.658 20.224C134.709 23.1253 130.783 27.264 127.882 32.64C125.066 37.9307 123.658 44.16 123.658 51.328C123.658 58.4107 125.066 64.64 127.882 70.016C130.783 75.392 134.709 79.5307 139.658 82.432C144.693 85.3333 150.325 86.784 156.554 86.784Z"
            stroke="black"
            stroke-width="10"
            mask="url(#path-1-outside-1_2_2)"
          />
          <path
            d="M286.875 96H275.227L228.379 24.96V96H216.731V6.65599H228.379L275.227 77.568V6.65599H286.875V96Z"
            stroke="black"
            stroke-width="10"
            mask="url(#path-1-outside-1_2_2)"
          />
          <path
            d="M318.379 16.256V46.08H350.891V55.68H318.379V86.4H354.731V96H306.731V6.65599H354.731V16.256H318.379Z"
            stroke="black"
            stroke-width="10"
            mask="url(#path-1-outside-1_2_2)"
          />
          <path
            d="M434.82 6.78399L405.764 62.336V96H394.116V62.336L364.932 6.78399H377.86L399.876 51.968L421.892 6.78399H434.82Z"
            stroke="black"
            stroke-width="10"
            mask="url(#path-1-outside-1_2_2)"
          />
          <path
            d="M497.538 6.78399V16.256H458.754V46.336H490.242V55.808H458.754V96H447.106V6.78399H497.538Z"
            stroke="black"
            stroke-width="10"
            mask="url(#path-1-outside-1_2_2)"
          />
          <path
            d="M523.254 6.78399V96H511.606V6.78399H523.254Z"
            stroke="black"
            stroke-width="10"
            mask="url(#path-1-outside-1_2_2)"
          />
          <path
            d="M590.082 96L568.834 59.52H554.754V96H543.106V6.78399H571.906C578.647 6.78399 584.322 7.93599 588.93 10.24C593.623 12.544 597.122 15.6587 599.426 19.584C601.73 23.5093 602.882 27.9893 602.882 33.024C602.882 39.168 601.09 44.5867 597.506 49.28C594.007 53.9733 588.717 57.088 581.634 58.624L604.034 96H590.082ZM554.754 50.176H571.906C578.221 50.176 582.957 48.64 586.114 45.568C589.271 42.4107 590.85 38.2293 590.85 33.024C590.85 27.7333 589.271 23.6373 586.114 20.736C583.042 17.8347 578.306 16.384 571.906 16.384H554.754V50.176Z"
            stroke="black"
            stroke-width="10"
            mask="url(#path-1-outside-1_2_2)"
          />
          <path
            d="M649.269 96.896C643.381 96.896 638.09 95.872 633.397 93.824C628.789 91.6907 625.162 88.7893 622.517 85.12C619.872 81.3653 618.506 77.056 618.421 72.192H630.837C631.264 76.3733 632.97 79.9147 635.957 82.816C639.029 85.632 643.466 87.04 649.269 87.04C654.816 87.04 659.168 85.6747 662.325 82.944C665.568 80.128 667.189 76.544 667.189 72.192C667.189 68.7787 666.25 66.0053 664.373 63.872C662.496 61.7387 660.149 60.1173 657.333 59.008C654.517 57.8987 650.72 56.704 645.941 55.424C640.053 53.888 635.317 52.352 631.733 50.816C628.234 49.28 625.205 46.8907 622.645 43.648C620.17 40.32 618.933 35.8827 618.933 30.336C618.933 25.472 620.17 21.1627 622.645 17.408C625.12 13.6533 628.576 10.752 633.013 8.70399C637.536 6.65599 642.698 5.63199 648.501 5.63199C656.864 5.63199 663.69 7.72266 668.981 11.904C674.357 16.0853 677.386 21.632 678.069 28.544H665.269C664.842 25.1307 663.05 22.144 659.893 19.584C656.736 16.9387 652.554 15.616 647.349 15.616C642.485 15.616 638.517 16.896 635.445 19.456C632.373 21.9307 630.837 25.4293 630.837 29.952C630.837 33.1947 631.733 35.84 633.525 37.888C635.402 39.936 637.664 41.5147 640.309 42.624C643.04 43.648 646.837 44.8427 651.701 46.208C657.589 47.8293 662.325 49.4507 665.909 51.072C669.493 52.608 672.565 55.04 675.125 58.368C677.685 61.6107 678.965 66.048 678.965 71.68C678.965 76.032 677.813 80.128 675.509 83.968C673.205 87.808 669.792 90.9227 665.269 93.312C660.746 95.7013 655.413 96.896 649.269 96.896Z"
            stroke="black"
            stroke-width="10"
            mask="url(#path-1-outside-1_2_2)"
          />
          <path
            d="M751.018 6.78399V16.256H726.698V96H715.05V16.256H690.602V6.78399H751.018Z"
            stroke="black"
            stroke-width="10"
            mask="url(#path-1-outside-1_2_2)"
          />
        </svg>
      </div>
    </nav>
  );
};

export default NavBar;