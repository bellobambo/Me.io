import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-black py-4">
      <div className="container mx-auto flex items-center justify-center">
        <div className="copyright text-sm">
          <span>&copy; 2023 My Portfolio</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
