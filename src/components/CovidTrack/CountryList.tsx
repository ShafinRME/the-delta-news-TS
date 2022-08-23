import React, { FC } from 'react';
import CountryItem from './CountryItem';
import type { Country } from './typeOfCovid';

interface Props {
    countries: Country[];
}

const CountryList: FC<Props> = ({ countries }) => {
    return (
        <ul className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {countries.map(country => 
           <CountryItem country={country} />
           )}
        </ul>
    );
};

export default CountryList;