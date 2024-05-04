import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from './DataContext';

const DeliveryAdress = () => {
    const { data, setDataValue } = useData();
    const navigate = useNavigate();

    const handleChangeAddress = (event) => {
        setDataValue({ ...data, delAddress: event.target.value });
    };
    const handleChangeCountry = (event) => {
        setSelectedCountry(event.target.value)
        setDataValue({ ...data, delCountry: event.target.value });
    };
    const handleChangeCity = (event) => {
        setDataValue({ ...data, delCity: event.target.value });
    };
    const handleChangeZip = (event) => {
        setDataValue({ ...data, delCode: event.target.value });
    };
    const handleChangeOptional = (event) => {
        setDataValue({ ...data, delOptional: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Інформація про користувача:");
        console.log("Номер:");
        console.log(data.dial_code + data.number);
        console.log("Прізвище та ім'я:");
        console.log(data.firstName);
        console.log(data.secondName);
        console.log("Дата народження:");
        console.log(data.dayOfBirth + "." + data.monthOfBirth + "." + data.yearOfBirth);
        console.log("Місце народження:");
        console.log(data.countryOfBirth);
        console.log(data.cityOfBirth);
        console.log("Соціальні мережі:");
        data.SN.map((item, index) => {
            console.log(item);
        });
        console.log("Адреса доставки:");
        console.log(data.delAddress);
        console.log(data.delCountry);
        console.log(data.delCity);
        console.log(data.delCode);
        console.log(data.delOptional);
        navigate('/contacts');
    }

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
        <p className="text-base text-gray-500">Fill in the data for profile. It will take a couple of minutes<br/>You only need a passport.</p>
        <form onSubmit={handleSubmit}>
        <div className="border border-gray-300 rounded p-8 mt-8 mb-8">
            <p className="font-black text-xl">Delivery address</p>
            <p className="text-base text-gray-500 mb-12">Used for shipping orders</p>
            Address
            <input type="text" placeholder="Your address " required className="border-b pl-2 pr-2 pb-1 pt-1 mb-8 mt-4 outline-none focus:border-blue-400 w-full" onChange={handleChangeAddress}/>
            City <br />
            <select className="border-b pl-2 pr-2 pb-1 pt-1 mb-8 outline-none mt-4 focus:border-blue-400" onChange={handleChangeCity}>
<option>--Select your city--</option>
{
    city
    .filter(city => city.country == selectedCountry) // Фильтруем города по стране
    .map(city => (
        city.cities.map((cityName, index) => (
            <option>
            {cityName}
            </option>
            ))
            ))
        } 
        </select>
        <div className="flex flex-row">
            <div className="flex- flex-col mr-8">
            <p>Country</p>
            <select onChange={handleChangeCountry} className="border-b pl-2 pr-2 pb-1 pt-1 mb-8 mt-4 outline-none focus:border-blue-400 w-[180px]">
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
            </div>
            <div className="flex flex-col">
                <p>Zip code</p>
                <input type="text" className="border-b pl-2 pr-2 pb-1 pt-1 mb-8 mt-4 outline-none focus:border-blue-400 w-[180px]" onChange={handleChangeZip} />
            </div>
        </div>
        Optional <br />
        <input type="text" className="border-b pl-2 pr-2 pb-1 pt-1 mt-4 outline-none focus:border-blue-400 w-full" onChange={handleChangeOptional}/>
        

        </div>
        <button type="submit" className=" rounded pr-6 pl-6 h-12 mt-8 w-150 bg-blue-500 text-white text-sm"><span className="mr-2">✓</span> Save</button>
        </form>
        </div>
        </div>
        </>
    )
}

export default DeliveryAdress;