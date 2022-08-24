import React, { FC } from 'react';
import { Country } from './typeOfCovid';

interface Props {
    country: Country;
}

const CountryItem: FC<Props> = ({country}) => {
    return (
        <div className='flex flex-col m-3 p-3 mx-auto h-[120px] w-[200px] bg-error-content text-success opacity-75'>
            <li key={country.ID}>
            <p className='text-center font-semibold mb-1'>{country.Country}</p>
            <p>New Confirmed: {country.NewConfirmed}</p>
            <p>New Deaths: {country.NewDeaths}</p>
            </li> 
        </div>
    );
};

export default CountryItem;