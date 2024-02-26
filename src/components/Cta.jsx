import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Cta = () => {
  return (
    <div className="w-full py-12">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-black text-6xl font-bold w-2/3 mx-auto text-center mb-4">
          Pellentesque suscipit fringilla libero eu.
        </h1>
        <button className="text-white bg-primary-color py-2 px-4 rounded-sm flex items-center mx-auto">
          Get a Demo <FaArrowRight className="text-white ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Cta;
