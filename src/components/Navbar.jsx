import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-w-5xl mx-auto py-4 bg-black/30">
      <div className="flex ">
        <img src="src/assets/Icon.png" alt="/" className="mr-1"/>
        <h1 className="font-bold">Nexcent</h1>
      </div>
      <nav className="w-[40%]">
        <ul className="flex justify-between w-full items-center">
          <li className="list-none">Home</li>
          <li className="list-none">Service</li>
          <li className="list-none">Feature</li>
          <li className="list-none">Product</li>
          <li className="list-none">Testimonial</li>
          <li className="list-none">~FAQ</li>
        </ul>
      </nav>
      <div>
        <button className="mr-2">Login</button>
        <button>Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
