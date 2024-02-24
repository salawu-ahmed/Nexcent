import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Marketing = () => {
  return (
    <div className="w-full py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-dark-grey text-center font-bold text-5xl mb-2">
          Caring is the new marketing
        </h2>
        <p className="text-center text-grey w-2/3 mx-auto text-xl mb-4">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
        <div className="flex items-center justify-between w-full">

          <div className="relative">
            <img src="src/assets/image 18.png" alt="/" />
            <div className="bg-silver rounded-md text-grey shadow-sm absolute bottom-[-32px] left-8 w-4/5 mx-auto p-4">
              <p>Creating Streamlined Safeguarding Processes with OneRen</p>
              <button className="text-primary-color text-center">
                Read more
                <FaArrowRight className="inline ml-2 text-primary-color" />
              </button>
            </div>
          </div>

          <div className="relative">
            <img src="src/assets/image 19.png" alt="/" />
            <div className="bg-silver rounded-md text-grey shadow-sm absolute bottom-[-32px] left-8 w-4/5 mx-auto p-4">
              <p>Creating Streamlined Safeguarding Processes with OneRen</p>
              <button className="text-primary-color text-center">
                Read more
                <FaArrowRight className="inline ml-2 text-primary-color" />
              </button>
            </div>
          </div>

          <div className="relative">
            <img src="src/assets/image 20.png" alt="/" />
            <div className="bg-silver rounded-md text-grey shadow-sm absolute bottom-[-32px] left-8 w-4/5 mx-auto p-4">
              <p>Creating Streamlined Safeguarding Processes with OneRen</p>
              <button className="text-primary-color text-center">
                Read more
                <FaArrowRight className="inline ml-2 text-primary-color" />
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Marketing;
