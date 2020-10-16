import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FetchData from '../../service/FetchData';
import Main from '../Main/Main';

import './details.css';

const Details = ({ cardId }) => {
    const fetchData = new FetchData();

    const [ data, setData ] = useState();

    useEffect(() => {
        fetchData.getLaunches()
            .then(data => data.find(item => item.id === cardId))
            .then(data => {
                const {name, id, links, details} = data;
                setData({ name, id, links, details });
            });
    }, []);


    return (
        <>
            {data ? <Main rocket={data.name}/> : null}
            {data ? 
                <main className="details" key={data.id}>
                    <div className="container">
                    <div className="details-row">
                        <div className="details-image">
                            <img src={data.links.patch.small} alt="" />
                        </div>
                        <div className="details-content">
                            <p className="details-description">{data.details}</p>
                        </div>
                    </div>
                    <div>
                        {data.links.webcast ?
                        <iframe 
                            className="details-youtube" 
                            width="560" 
                            height="315" 
                            src={`https://www.youtube.com/embed/${data.links.youtube_id}`} 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        >
                        </iframe> : ''}
                        
                    </div>
                </div>
                    <Link to="/SpaceX-react/calendar" className="button button-back">go back</Link>
                </main> :
            null}
        </>
    )
};

export default Details;