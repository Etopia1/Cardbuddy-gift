// import React from 'react'

// const SecondPage = () => {
//   return (
//     <div className=' w-[100%] sm:h-[90vh] h-[130vh] flex p-[5px] items-center justify-center bg-[#cad8e3]  '>
//  <div className=' w-[100%] h-[100%] sm:h-[100%] flex items-center sm:flex-row justify-center bg-[] flex-col-reverse  '>
//  <div className=' sm:w-[50%] w-[100%] h-[30%]  sm:h-[100%] flex items-center justify-center sm:justify-end bg-[]  '>
// <img  className="sm:w-[74%] rounded-[10px] h-[100%] w-[100%] sm:h-[74%] flex items-center justify-center bg-[]" src="https://giftlycheck.com/wp-content/uploads/2024/06/1-RR0421-Cline-high-performing-team-members-900x550-1.jpg" alt="" />
//     </div>
//      <div className=' sm:w-[50%] w-[100%]  h-[70%] p-[10px]   items-center justify-center gap-[30px] flex flex-col bg-[]  '>
//      <h2 className=" sm:text-[43px] text-[25px]  sm:w-[70%] sm:h-[30%] text-[black] ">What do we do?</h2>
//      <h1 className=" sm:text-[33px] sm:w-[70%] text-[25px] sm:h-[30%] text-[black] " >A Dedicated Team of Reliable Gift Card Validation Professionals for Your Business and Personal Needs</h1>
//      <p className=" sm:text-[16px] sm:w-[70%] sm:h-[30%] text-[black] "p>With over 25 years of experience in gift card validation services, our team of 40 experts is ready to assist you with all your gift card needs. Whether it’s a complex issue or a quick fix, we provide solutions at the most affordable cost.</p>
//      <button className="sm:mr-[290px] w-[100%] h-[6%] sm:text-[19px] sm:w-[30%] rounded-[3px] p-[2px] text-[white] sm:h-[10%] bg-[red] ">KNOW MORE ABOUT US</button>
//     </div>
//     </div>
//     </div>
//   )
// }

// export default SecondPage
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Users, Info } from 'lucide-react';

const SecondPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full sm:h-[90vh] h-auto flex items-center justify-center p-4 bg-[#1e293b]">
      <div className="w-full h-full flex flex-col-reverse sm:flex-row items-center justify-center gap-8">
        
        {/* Left - Image */}
        <div
          className="w-full sm:w-1/2 flex items-center justify-center"
          data-aos="fade-down"
        >
          <img
            src="https://i.pinimg.com/736x/f1/37/b1/f137b1914b1b9358e9ff9c0a76b852f3.jpg"
            alt="Gift Card Team"
            className="rounded-xl w-full sm:w-[80%] h-auto object-cover shadow-lg"
          />
        </div>

        {/* Right - Text Content */}
        <div
          className="w-full sm:w-1/2 flex flex-col items-start justify-center px-4 sm:px-8 gap-6"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-2">
            <Users size={28} className="text-blue-700" />
            What do we do?
          </h2>
          <h1 className="text-xl sm:text-2xl text-white font-semibold leading-snug">
            A Dedicated Team of Reliable Gift Card Validation Professionals for Your Business and Personal Needs
          </h1>
          <p className="text-sm sm:text-base text-white leading-relaxed">
            With over 25 years of experience in gift card validation services, our team of 40+ experts is ready to assist you with all your gift card needs. Whether it’s a complex issue or a quick fix, we provide solutions at the most affordable cost.
          </p>
          <button
            className="flex items-center gap-2 bg-blue-600 hover:bg-[ rgb(27, 27, 250)]-700 text-white font-medium px-6 py-3 rounded-md shadow-md transition-all duration-300"
            data-aos="zoom-in"
          >
            <Info size={20} />
            KNOW MORE ABOUT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
