import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from './DataContext';

const NumberConfirmation = () => {
 
  const { data, setDataValue } = useData();
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue === '1234') {
          navigate('/emailPass');
        }
      };
      const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

    return(

    
    <>
    <img src="logo.png" alt="company logo" className="absolute left-[100px] top-8 w-200 h-15"/>
    <div className="flex justify-center items-baseline h-screen">

    
    <div className="w-456 flex flex-col mt-200">
    <h1 className="font-black text-4xl mb-5">Registration</h1>
    <p className="text-base text-gray-500">Fill in the registration data. It will take a couple of minutes. <br/>All you need is a phone number and e-mail.</p>

    <form onSubmit={handleSubmit}>
    <div className="border border-gray-300 rounded p-4 mt-8 mb-8">
        Your phone number
        <br/>
            
        <input type="tel" value={data.number} readOnly className="border-b pl-2 pr-2 pb-1 pt-1 outline-none"/>
        <br />
            
            
        
    </div>
    Confirmation code
            <br />
            <input type="text" pattern="[0-9]{4}" required className="border-b p-2 mb-4 tracking-[1em] outline-none focus:border-blue-400" onChange={handleInputChange} placeholder="————" />
            <br/>
            <p className="text-sm text-gray-500">Confirm phone number with code from sms message</p>
    <button type="submit" className="border-2 pr-6 pl-6 h-12 mt-8 w-150 hover:bg-slate-100">Confirm</button>
    </form>

    </div>
    
    </div>
    </>
    )
    
}

export default NumberConfirmation;