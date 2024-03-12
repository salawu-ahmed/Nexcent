import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-silver">
    <div className="flex justify-between items-center max-w-6xl mx-auto py-4 bg-silver">
      <div className="flex ">
        <img src="public/assets/Icon.png" alt="/" className="mr-1"/>
        <h1 className="font-bold text-2xl">Nexcent</h1>
      </div>
      <nav className="hidden sm:block sm:min-w-[40%]">
        <ul className="flex justify-between w-full items-center">
          <li className="list-none p-2">Home</li>
          <li className="list-none p-2">Service</li>
          <li className="list-none p-2">Feature</li>
          <li className="list-none p-2">Product</li>
          <li className="list-none p-2">Testimonial</li>
          <li className="list-none p-2">~FAQ</li>
        </ul>
      </nav>
      <div className="flex">
        <button className="mr-2 text-primary-color p-2 rounded-sm">Login</button>
        <button className="bg-primary-color text-white py-2 px-4 rounded-sm">Sign up</button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
