import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Support</h4>
          <ul>
            <li>FAQs</li>
            <li>Contact</li>
            <li>Security</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
