import React from "react";

const Footerbar = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  return <div className="mx-auto p-1">&copy; Copyright {currentYear}</div>;
};

export default Footerbar;
