import React from 'react';
import { motion } from 'framer-motion';

const ThirdPage = ({ onVerifyClick }) => {
  return (
    <div className="w-full bg-[#1e293b] text-[white] py-20 space-y-32">

      {/* Section 1 */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-16 px-6 md:px-20">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-[white] text-center md:text-left space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            An Effective Method to Validate All Card Data
          </h2>
          <p className="text-lg md:text-xl">
            Giftify offers a fast and reliable framework to verify your cards. From physical validation to app activation,
            our smart algorithm ensures speed, security, and efficiency at every step.
          </p>
          <button className="mt-2 bg-[blue] text-white text-lg font-medium px-6 py-3 rounded-full shadow-md hover:bg-gray-900 transition duration-300">
            Learn More
          </button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <img
            src="https://giftlycheck.com/wp-content/uploads/2024/05/image1.jpg"
            alt="Card validation"
            className="rounded-xl shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-16 px-6 md:px-20">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:w-1/2 text-center md:text-left space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Have an Emergency Card to Verify?
          </h2>
          <p className="text-lg md:text-xl">
            Our emergency support is just a click away. Whether it’s a last-minute issue or critical card error,
            we’ve got you covered.
          </p>
          <button
            onClick={onVerifyClick}
            className="mt-2 bg-[blue] text-white text-lg font-medium px-6 py-3 rounded-full shadow-md hover:bg-gray-900 transition duration-300"
          >
            Verify Now
          </button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:w-1/2"
        >
          <img
            src="https://giftlycheck.com/wp-content/uploads/2024/06/1-RR0421-Cline-high-performing-team-members-900x550-1.jpg"
            alt="Emergency card verification"
            className="rounded-xl shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ThirdPage;
