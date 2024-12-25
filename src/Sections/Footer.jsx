import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://github.com/Vivek4224"
            target="_blank"
            className="cursor-pointer"
          >
            <img src="assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://x.com/VKing2283"
            target="_blank"
            className="cursor-pointer"
          >
            <img
              src="assets/twitter.svg"
              alt="twitter"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.instagram.com/vivekbarvaliya08/"
            target="_blank"
            className="cursor-pointer"
          >
            <img
              src="assets/instagram.svg"
              alt="instagram"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
      </div>
      <p className="text-white-500">© 2024 Vivek. All rights reserved.</p>
    </section>
  );
};

export default Footer;