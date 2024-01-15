import React from "react";
import Image from "next/image"

const Navbar = () => {
  return (
    <>
      <nav className="flex sm:w-full gap-8 justify-between bg-indigo-600 dark:bg-indigo-800 p-3">
        <div className="flex sm:mx-24 items-center gap-1 flex-shrink-0 text-white">
          <Image
            src="/salespotlogo.png"
            alt="SaleSpot Logo"
            className="dark:invert"
            width={40}
            height={10}
            priority
          />
          <a href="/" className="font-semibold text-xl xs:text-sm tracking-tight">
            SaleSpot
          </a>
        </div>
        <div className="flex sm:mx-24 items-center">
          <div className="text-lg">
            <a
              href="/sales"
              className="text-white hover:text-green-700"
            >
              Brand Sales
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
