import React from "react";
import { FaArrowRight } from "react-icons/fa"

const Customers = () => {
  return (
    <div className="w-full bg-silver py-12">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="w-2/6">
          <img src="src/assets/image 9.png" alt="/" />
        </div>
        <div className="w-3/5">
          <p className="text-grey font-medium mb-2">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h3 className="text-primary-color text-xl mb-2">Tim Smith</h3>
          <p className="text-light-grey mb-4">British Dragon boat racing association </p>
          <ul className="list-none flex max-w-full justify-between items-center">
            <li>
              <img src="/Logo.png" alt="/" />
            </li>
            <li>
              <img src="/Logo (1).png" alt="/" />
            </li>
            <li>
              <img src="/Logo (2).png" alt="/" />
            </li>
            <li>
              <img src="/Logo (3).png" alt="/" />
            </li>
            <li>
              <img src="/Logo (4).png" alt="/" />
            </li>
            <li>
              <img src="/Logo (5).png" alt="/" />
            </li>
            <li className="text-primary-color text-xl flex gap-2 items-center">
              Meet all customers <FaArrowRight />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Customers;
