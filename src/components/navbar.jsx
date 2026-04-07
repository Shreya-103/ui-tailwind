import React from "react";

const Nav = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 w-full gap-4">
      
      <span className="bg-black text-white rounded-full px-4 py-2 text-center">
        Target Audience
      </span>

      <button className="bg-gray-100 text-black rounded-md px-4 py-2">
        $ Digital Banking
      </button>

    </div>
  );
};

export default Nav;