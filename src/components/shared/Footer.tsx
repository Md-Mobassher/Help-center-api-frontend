import React from "react";
import { CgAbstract } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-16">
      <div className="container mx-auto lg:px-6 md:px-6 px-4 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 lg:gap-8 md:gap-6 gap-5">
        <div>
          <h5 className="text-xl font-bold mb-4">Abstract</h5>
          <ul>
            <li>
              <a href="#">Branches</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-xl font-bold mb-4">Resources</h5>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Release Notes</a>
            </li>
            <li>
              <a href="#">Status</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-xl font-bold mb-4">Community</h5>
          <ul>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Dribbble</a>
            </li>
            <li>
              <a href="#">Podcast</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-xl font-bold mb-4">Company</h5>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Legal</a>
            </li>
          </ul>
          <h5 className="text-xl font-bold mb-2 mt-5">Contact Us</h5>
          <ul>
            <li>
              <a href="#">info@abstract.com</a>
            </li>
          </ul>
        </div>
        <div className="text-start lg:mt-44 md:mt-32 mt-5">
          <div className="bg-white rounded-xl w-8 h-8 p-1 mb-3">
            <CgAbstract className="size-6 text-black" />
          </div>
          <p>
            © Copyright 2022 Abstract Studio Design, Inc. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
