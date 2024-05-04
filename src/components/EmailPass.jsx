import { useNavigate } from "react-router-dom";
import { useData } from './DataContext';

const EmailPass = () => {
    const navigate = useNavigate();
    const { data, setDataValue } = useData();
    const handleChangeEmail = (event) => {

        setDataValue({ ...data, email: event.target.value });
    };
    const handleChangePass = (event) => {

        setDataValue({ ...data, password: event.target.value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/personalData');
      };
    return(
        <>
<img src="logo.png" alt="company logo" className="absolute left-[100px] top-8 w-200 h-15"/>
    <div className="flex justify-center items-baseline h-screen">

    
    <div className="w-456 flex flex-col mt-200">
    <h1 className="font-black text-4xl mb-5">Registration</h1>
    <p className="text-base text-gray-500">Fill in the registration data. It will take a couple of minutes. <br/>All you need is a phone number and e-mail.</p>

    <div className="border border-gray-300 rounded p-4 mt-8 mb-8">
            
        <input type="tel" value={data.number} readOnly className="border-b pl-2 pr-2 pb-1 pt-1 outline-none"/>
        <br />
        <div className="flex flex-row">
        <p className="text-sm text-gray-500 mr-2">✓</p> <p className="text-sm text-gray-500">Number confirmed </p>
        </div>
        
    </div>
        
            <form onSubmit={handleSubmit}>
            <div className="border border-gray-300 rounded p-8 mt-8 mb-8">
                <p className="text-sm  ">Enter your email</p>
                <br/>
                <input type="email" name="email" required className="border-b pl-2 pr-2 pb-1 pt-1 mb-8 outline-none focus:border-blue-400 w-full" onChange={handleChangeEmail}/>
                <br/>
                <p className="text-sm  ">Set a password</p>
                <br/>
                <input type="password" name="password" required className="border-b pl-2 pr-2 pb-1 pt-1 mb-4 outline-none tracking-[0.3em] focus:border-blue-400 w-full" onChange={handleChangePass}/>
        </div>
        <button type="submit" className=" rounded pr-6 pl-6 h-12 mt-8 w-150 bg-blue-500 text-white text-sm">Register now</button>
        </form>

    </div>
    </div>
        </>
    )
}

export default EmailPass;