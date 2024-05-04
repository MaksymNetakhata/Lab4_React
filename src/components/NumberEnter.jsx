import { useNavigate } from "react-router-dom";
import { useData } from './DataContext';
import { useState, useEffect } from "react";

const NumberEnter = () => {
    const { data, setDataValue } = useData();

    const navigate = useNavigate();

    const handleChange = (event) => {
        const value = event.target.value;
        setDataValue({ ...data, number: value });
    };
    const handleCodeChange = (event) => {
        setDataValue({ ...data, dial_code: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        navigate('/numberConfirmation');
    }


    const [code, setCode] = useState([]);

    useEffect( () =>{
        const getcode = async () =>{
            const res = await fetch("https://countriesnow.space/api/v0.1/countries/codes");
            const data = await res.json();
        if (data && data.data) {
            setCode(data.data);
        } else {
            console.error("Invalid response format from API");
        }
        }
        getcode();
    }, []);

    return(

    
    <>
    <img src="logo.png" alt="company logo" className="absolute left-[100px] top-8 w-200 h-15"/>
    <div className="flex justify-center items-baseline h-screen">

    
    <div className="w-456 flex flex-col mt-200">
    <h1 className="font-black text-4xl mb-5">Registration</h1>
    <p className="text-base text-gray-500">Fill in the registration data. It will take a couple of minutes. <br/>All you need is a phone number and e-mail.</p>
    <div className="bg-gray-100 mt-8 rounded p-4 mb-8 flex flex-row items-center ">
        <img src="padlock.png" alt="padlock" className="w-8 h-8 mr-4"/>
        <p className="text-sm">We take privacy  issues seriously. You can be sure that your personal data is securely protected</p>
    </div>
    <form onSubmit={handleSubmit}>
    <div className="border border-gray-300 rounded p-8">
        Enter your phone number
        <br/>
        <select className="border-b pl-2 pr-2 pb-1 pt-1 mb-8 outline-none focus:border-blue-400 mr-2" onChange={handleCodeChange}>
    <option>Code</option>
    {
        code.map( (codeget) => (
            <option>
                {codeget.dial_code}
            </option>
        )

        )
    }
</select>
            <input type="tel" name="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={handleChange} required className="border-b pl-2 pr-2 pb-1 pt-1 mb-4 outline-none focus:border-blue-400"/>
            <br/>
            
        
    </div>
    <button type="submit" className="border-2 pr-6 pl-6 h-12 mt-8 w-150 hover:bg-slate-100" >Send code</button>
    </form>
    </div>
    </div>
    </>
    )
    
}

export default NumberEnter;