import React from 'react';

const Navbar = (props) => {
  return (
    <nav class="max-w-screen bg-white z-10 shadow-xl sticky top-0 border-gray-200 ">
      <div class="flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex items-center">
          <img  className="h-12 w-12 mr-2 ml-5" src="https://static.vecteezy.com/system/resources/previews/000/583/708/original/online-shop-icon-vector.jpg"></img>
          <span class="self-center text-2xl font-semibold whitespace-nowrap ">
            Shop
          </span>
        </a>
        <div
          class="inline-flex items-center p-2 w-1/6  h-10 justify-center text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 "

        >
          <img className="w-10 h-10 mr-2" src="https://icons.veryicon.com/png/o/object/material_design/shopping-cart-57.png" alt="" />
          <h1 className="font-bold text-black">{props.counter}</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
