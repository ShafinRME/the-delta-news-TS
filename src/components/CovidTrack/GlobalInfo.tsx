import React, { FC } from 'react';

interface Props {
    newConfirmed: number;
    newDeaths: number;
    newRecovered: number;
    Date: string;
}

const GlobalInfo: FC<Props> = ({
    newConfirmed,
    newDeaths,
    Date
}) => {
    return (
        <div>
            <h1 className="text-center text-3xl font-bold m-3">Global Covid-19 data</h1>
            <h1 className="font-semibold text-center m-2">Date: {Date}</h1>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 text-center font-semibold text-xl my-2">
                <h3>New Confirmed: {new Intl.NumberFormat().format(newConfirmed)} </h3>
                <h3>New Death: {new Intl.NumberFormat().format(newDeaths)} </h3>
            </div>
        </div>
    );
};

export default GlobalInfo;