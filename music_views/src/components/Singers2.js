import React, { useEffect, useState } from 'react';
import { Song } from './Song';
export const Singers = (props) => {
    const [singers, setSinger] = useState([]);
    const [sname, setSingerName] = useState('');
    const getSongsBySinger = (singerName) => {
        setSingerName(singerName);
    }
    useEffect(() => {
        const promise = fetch(process.env.REACT_APP_SINGER_URL);
        promise.then(response => {
            console.log('Response ', response);
            response.json().then(singers => {
                setSinger(singers['singers']);
            }).catch(err => console.log('Invalid JSON ', err))
                .catch(err => console.log('Error During Server Call ', err))
        })
    }, []);
    if (props.SingerName === "Back") {
        getSongsBySinger(" ");
    }
    if (sname.length === 0) {
        return (
            <div className='row'>
                {singers.map(singer => {
                    return (
                        <div className="card" style={{ width: '18rem' }}>
                            <img onClick={() => {
                                getSongsBySinger(singer.name);
                            }} src={singer.photo} className="card-img-top" alt={singer.name} />
                            <div className="card-body">
                                <p className="card-text">{singer.name}</p>
                            </div>
                        </div>);
                })}
            </div>

            //{singers.map(singer=><span>{singer.name} <img src={singer.photo}/></span>)}

        )
    }
    else {
        return (
            <Song singerName={sname} />
        )
    }
}