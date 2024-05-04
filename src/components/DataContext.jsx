import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState({
        number: '',
        dial_code: '',
        email: '',
        password: '',
        firstName: '',
        secondName: '',
        dayOfBirth: '',
        monthOfBirth: '',
        yearOfBirth: '',
        countryOfBirth: '',
        cityOfBirth: '',
        firstName: '',
        firstName: '',
        SN: ['', '', '', '', ''],
        delAddress: '',
        delCountry: '',
        delCity: '',
        delCode: '',
        delOptional: ''

      });


  const setDataValue = (newValue) => {
    setData(newValue);
  };

  return (
    <DataContext.Provider value={{ data, setDataValue }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);