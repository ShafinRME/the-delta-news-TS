import React from 'react';
import { useParams } from 'react-router-dom';

const SingleLiveNews = () => {

    const {id} = useParams();
    return (
        <div>
            <h1>single news {id}</h1>
        </div>
    );
};

export default SingleLiveNews;