import React from "react";
import { BsSendFill } from "react-icons/bs";
import { FaDribbble, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-dark-grey py-12">
      <div className="max-w-6xl mx-auto flex items-start justify-between">
        <div className="w-1/3">
          <div className="flex items-center mb-6 gap-2">
            <img src="src/assets/Icon.png" alt="/" />
            <h1 className="text-3xl font-bold text-white">Nextcent</h1>
          </div>
          <p className="text-silver mb-6">
            Copyright &copy; 2020 Nextcent Itd <br /> All rights reserved
          </p>
          <ul className="flex gap-4">
            <li className="p-2 rounded-full bg-grey">
              <FaInstagram className="text-white" />
            </li>
            <li className="p-2 rounded-full bg-grey">
              <FaDribbble className="text-white" />
            </li>
            <li className="p-2 rounded-full bg-grey">
              <FaTwitter className="text-white" />
            </li>
            <li className="p-2 rounded-full bg-grey">
              <FaYoutube className="text-white" />
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-6 text-white">Company</h2>
          <ul className="text-silver text-sm">
            <li>About us</li>
            <li>Contact Us</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-6 text-white">Support</h2>
          <ul className="text-silver text-sm">
            <li>Help Center</li>
            <li>Terms Of Service</li>
            <li>Legal</li>
            <li>Privay policy</li>
            <li>Status</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-6 text-white">Stay up to date</h2>
          <div className="flex items-center gap-2 bg-grey text-white p-2 rounded-md">
            <input
              type="text"
              placeholder="Your email address"
              className="placeholder-white focus:outline-none bg-transparent"
            />
            <BsSendFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
