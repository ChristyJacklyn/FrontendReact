import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black-100 text-black p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
