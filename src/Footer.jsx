import React from 'react';

const Footer = ({onVerifyClick2}) => {
  return (
    <footer className="w-full bg-[#1e293b] text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h3 className="text-xl font-bold mb-2">Gift-Card-Checker</h3>
          <p className="text-sm text-gray-300">
            Reliable Gift Card Validation Services for Everyone.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 text-sm">
          <p  className="hover:text-gray-400">Home</p>
          <p onClick={onVerifyClick2}  className="hover:text-gray-400">Customer Review</p>
          
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} Gift-Card-Checker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
