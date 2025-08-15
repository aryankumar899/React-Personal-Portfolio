import React from "react";

function NavBarLogo() {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      {/* Full name - only visible on md and above */}
      <h1 className="text-white text-2xl hidden md:block">Aryan Kumar</h1>

      {/* Short name - only visible on mobile */}
      <h1 className="text-white font-extrabold text-4xl md:hidden">AR</h1>
    </div>
  );
}

export default NavBarLogo;
