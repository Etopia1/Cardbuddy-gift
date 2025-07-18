// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { CheckCircle, ArrowRight } from 'lucide-react';

// function FirstPage() {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <div className="w-full min-h-[90vh] bg-gradient-to-r from-[#1e1e1e] via-[#2a2a2a] to-[#1e1e1e] flex flex-col md:flex-row items-center justify-center px-4 py-8">
      
//       {/* Left Section */}
//       <div
//         className="relative w-full md:w-3/5 h-full flex flex-col items-start justify-center gap-6 p-4 md:p-10 bg-cover bg-center rounded-xl overflow-hidden"
//         style={{ backgroundImage: `url("https://i.pinimg.com/736x/96/bc/7d/96bc7d086c32610cecc7f0711fcff614.jpg")` }}
//         data-aos="fade-right"
//       >
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-black opacity-60 z-0" />

//         {/* Content */}
//         <div className="relative z-10">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
//             Check the authenticity of your gift cards
//           </h1>
//           <p className="text-white text-base md:text-lg leading-relaxed max-w-[90%] mt-4">
//             <CheckCircle className="inline-block mr-2 text-green-400" />
//             Unlock the full potential of your gift card program with our top-tier validation services! We offer a comprehensive solution including fraud prevention, expiration tracking, and more. Contact us today to ensure your program runs smoothly and securely.
//           </p>
//           <button
//             className="mt-6 flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold text-lg px-6 py-3 rounded-md shadow-lg transition-all duration-300"
//             data-aos="zoom-in-up"
//           >
//             Verify <ArrowRight size={20} />
//           </button>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="w-full md:w-2/5 flex items-center justify-center mt-10 md:mt-0" data-aos="fade-left">
//         <img
//           src="https://i.pinimg.com/736x/3e/ce/e5/3ecee5ceb68f2314133506aca48b1b68.jpg"
//           alt="Gift Card Screenshot"
//           className="w-3/4 md:w-[80%] h-auto object-contain rounded-xl shadow-lg"
//         />
//       </div>
//     </div>
//   );
// }

// export default FirstPage;
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CheckCircle, ArrowRight } from 'lucide-react';

function FirstPage({ onVerifyClick }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    // <div
    //   className="w-full min-h-screen bg-cover bg-center relative flex flex-col md:flex-row items-center justify-center px-4 py-8"
    //   style={{
    //     backgroundImage: `url("https://i.pinimg.com/736x/96/bc/7d/96bc7d086c32610cecc7f0711fcff614.jpg")`
    //   }}
    // >
    <div
  className="w-full min-h-screen pt-[80px] bg-cover bg-center relative flex flex-col md:flex-row items-center justify-center px-4 py-8"
  style={{
    backgroundImage: `url("https://i.pinimg.com/736x/4a/77/8a/4a778ad40d7c0b165dffe63e66c155c2.jpg")`
  }}
>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-black opacity-70 z-0" />

      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center gap-8">
        
        {/* Left Section */}
        <div
          className="w-full md:w-3/5 flex flex-col items-start justify-center gap-6 p-4 md:p-10"
          data-aos="fade-right"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Check the authenticity of your gift cards
          </h1>
          <p className="text-white text-base md:text-lg leading-relaxed max-w-[90%] mt-4">
            <CheckCircle className="inline-block mr-2 text-green-400" />
            Unlock the full potential of your gift card program with our top-tier validation services! We offer a comprehensive solution including fraud prevention, expiration tracking, and more. Contact us today to ensure your program runs smoothly and securely.
          </p>
          <button
		  onClick={ onVerifyClick }
            className="mt-6 flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold text-lg px-6 py-3 rounded-md shadow-lg transition-all duration-300"
            data-aos="zoom-in-up"
          >
            Verify <ArrowRight size={20} />
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/5 flex items-center justify-center" data-aos="fade-left">
          <img
            src="https://i.pinimg.com/736x/f4/64/0d/f4640d749f16f24ac0ba9d83b53f68b6.jpg"
            alt="Gift Card Screenshot"
            className="w-3/4 md:w-[80%] h-auto object-contain rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default FirstPage;

