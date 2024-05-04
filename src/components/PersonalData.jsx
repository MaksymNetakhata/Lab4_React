import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useData } from './DataContext';

const PersonalData = () => {
    const navigate = useNavigate();
    const { data, setDataValue } = useData();
    const handleSubmit = (event) => {
        event.preventDefault();

        navigate('/contacts');
    }

    const handleChangeName = (event) => {
        setDataValue({ ...data, firstName: event.target.value });
    };
    const handleChangeSurname = (event) => {
        setDataValue({ ...data, secondName: event.target.value });
    };
    const handleChangeDay = (event) => {
        setDataValue({ ...data, dayOfBirth: event.target.value });
    };
    const handleChangeMonth = (event) => {
        setDataValue({ ...data, monthOfBirth: event.target.value });
    };
    const handleChangeYear = (event) => {
        setDataValue({ ...data, yearOfBirth: event.target.value });
    };
    const handleChangeCountry = (event) => {
        setSelectedCountry(event.target.value)
        setDataValue({ ...data, countryOfBirth: event.target.value });
    };
    const handleChangeCity = (event) => {
        setDataValue({ ...data, cityOfBirth: event.target.value });
    };

    const [country, setCountry] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [city, setCity] = useState([]);

    useEffect( () =>{
        const getcountry = async () =>{
            const res = await fetch("https://countriesnow.space/api/v0.1/countries");
            const data = await res.json();
        if (data && data.data) {
            setCountry(data.data);
        } else {
            console.error("Invalid response format from API");
        }
        }
        getcountry();
    }, []);

    useEffect( () =>{
        const getcity = async () =>{
            const res = await fetch("https://countriesnow.space/api/v0.1/countries");
            const data = await res.json();
        if (data && data.data) {
            setCity(data.data);
        } else {
            console.error("Invalid response format from API");
        }
        }
        getcity();
    }, []);

    return(
        <>
        <img src="logo.png" alt="company logo" className="absolute left-[100px] top-8 w-200 h-15"/>
    <div className="flex justify-center items-baseline h-screen">

    
        <div className="w-456 flex flex-col mt-200">
        <h1 className="font-black text-4xl mb-5">Profile info</h1>
        <p className="text-base text-gray-500  mb-8">Fill in the data for profile. It will take a couple of minutes<br/>You only need a passport.</p>
        <form onSubmit={handleSubmit}>
            
            <input type="checkbox" name="terms" className="" required/>
            <label htmlFor="terms" className="ml-4">I agree with Terms of use</label>
            <div className="border border-gray-300 rounded p-8 mt-8 mb-8">
                <p>First name</p>
                <input type="text" name="firstName" id="" required className="border-b pl-2 pr-2 pb-1 pt-1 mb-8 outline-none focus:border-blue-400" onChange={handleChangeName}/>
                <br />
                <p>Second name</p>
                <input type="text" name="secondName" id="" required className="border-b pl-2 pr-2 pb-1 pt-1 mb-8 outline-none focus:border-blue-400" onChange={handleChangeSurname}/>
                <div>
                    <p>Date of birth</p>
                    <select name="dayOfBirth" required className="border-b pl-2 pr-2 pb-1 pt-1 mb-8 outline-none focus:border-blue-400" onChange={handleChangeDay}>
  <option value="">Day</option>
  {Array.from({ length: 31 }, (_, i) => (
    <option key={i + 1} value={i + 1}>{i + 1}</option>
  ))}
</select>

<select name="monthOfBirth" required className="border-b pl-2 pr-2 pb-1 pt-1 mb-8 ml-4 outline-none focus:border-blue-400" onChange={handleChangeMonth}>
  <option value="">Month</option>
  {Array.from({ length: 12 }, (_, i) => (
    <option key={i + 1} value={i + 1}>{i + 1}</option>
  ))}
</select>

<select name="yearOfBirth" required className="border-b pl-2 pr-2 pb-1 pt-1 ml-4  mb-8 outline-none focus:border-blue-400" onChange={handleChangeYear}>
  <option value="">Year</option>
  {Array.from({ length: 105 }, (_, i) => (
    <option key={i + 1920} value={i + 1920}>{i + 1920}</option>
  ))}
</select>


<p>Country</p>
<select onChange={handleChangeCountry} className="border-b pl-2 pr-2 pb-1 pt-1 mb-8 outline-none focus:border-blue-400">
    <option>--Select your country--</option>
    {
        country.map( (countryget) => (
            <option>
                {countryget.country}
            </option>
        )

        )
    }
</select>
<p>City</p>
<select className="border-b pl-2 pr-2 pb-1 pt-1 mb-8 outline-none focus:border-blue-400" onChange={handleChangeCity}>
<option>--Select your city--</option>
{
    city
    .filter(city => city.country === selectedCountry) // Фильтруем города по стране
    .map(city => (
        city.cities.map((cityName, index) => (
            <option>
            {cityName}
        </option>
        ))
    ))
} 
</select>
                </div>
                <div className="border border-gray-300 rounded p-4 mt-8 mb-8">
                    <input type="tel" readOnly value="111" /> <br />
                    <div className="flex flex-row">
                    <p className="text-sm text-gray-500 mr-2">✓</p> <p className="text-sm text-gray-500">Your ITIN</p>
                    </div>
                    
                </div>
        </div>
        <button type="submit" className="border-2 pr-6 pl-6 h-12 mt-8 w-150 hover:bg-slate-100" >Go next →</button> 
        </form>
        </div>
        </div>

        </>
    )
}

export default PersonalData;