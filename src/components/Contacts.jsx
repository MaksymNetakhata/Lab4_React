import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { useData } from './DataContext';

const Contacts = () => {

    const { data, setDataValue } = useData();
    const navigate = useNavigate();
    const [rows, setRows] = useState(1);

    const handleChange = (event, index) => {
        setDataValue(prevData => ({
            ...prevData,
            SN: prevData.SN.map((item, idx) => {
                if (idx === index) {
                    return { ...item, [event.target.name]: event.target.value };
                } else {
                    return item;
                }
            })
        }));
        
    };
    
    const handleAddRow = () => {
        setRows(prevCount => prevCount + 1);
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        navigate('/deliveryAdress');
    }

    return(
        <>
        <img src="logo.png" alt="company logo" className="absolute left-[100px] top-8 w-200 h-15"/>
    <div className="flex justify-center items-baseline h-screen">

    
        <div className="w-456 flex flex-col mt-200">
        <h1 className="font-black text-4xl mb-5">Profile info</h1>
        <p className="text-base text-gray-500">Fill in the data for profile. It will take a couple of minutes<br/>You only need a passport.</p>
        <form onSubmit={handleSubmit}>
        <div className="border border-gray-300 rounded p-8 mt-8 mb-8">
            <p className="font-black text-xl">Contacts</p>
            <p className="text-base text-gray-500 mb-12">These contacts are used to inform about orders</p>
            <div className="flex flex-row">
            <img src="/images/email.png" alt="" className="w-6 h-6 mr-4" /><input type="email" value={data.email} required className="border-b pl-2 pr-2 pb-1 pt-1 mb-8 outline-none focus:border-blue-400 w-full" />
            </div>
            <div className="flex flex-row">
                <img src="/images/number.png" alt="" className="w-6 h-6 mr-4" /><input type="tel" value={data.number} required className="border-b pl-2 pr-2 pb-1 pt-1 mb-12 outline-none focus:border-blue-400 w-full" />
            </div>
            
            <p className="font-black text-xl">Social network</p>
            <p className="text-base text-gray-500 mb-8">Indicate the desired communication method</p>
            {[...Array(rows)].map((_, index) => (
                <>
<select key={index} className="border-b pl-2 pr-2 pb-1 pt-1 mb-12 outline-none mr-4 focus:border-blue-400" >
          <option className="" required>Skype</option>
          <option>Discord</option>
          <option>Facebook</option>
          <option>X</option>
          <option>Instagram</option>
        </select>
        <input type="text" required className="border-b pl-2 pr-2 pb-1 pt-1 mb-8 outline-none focus:border-blue-400 w-[252px]" placeholder="@profile"  onChange={(event) => handleChange(event, index)}/>

                </>
        
      ))}
      <button className="text-blue-500" onClick={handleAddRow}>+ Add More</button>
            

        </div>
        <button type="submit" className="border-2 pr-6 pl-6 h-12 mt-8 w-150 hover:bg-slate-100">Go next →</button>
        </form>
        </div>
        </div>
        </>
    )
}

export default Contacts;