import React, { useEffect, useState } from 'react';
export const SearchSong = (props)=>{
    const [songs, setSongs] = useState([]);
    const [currOrder, setOrder] =useState('asc');
    const audioStyle = {
        width:'400px'
    }
    const imageStyle = {
        height:'100px',
        width:'100px'
    }
    const changeOrder = () => {

        const button = document.querySelector('#orderbutton');
        if (currOrder === 'asc') {
            setOrder('desc')
            button.innerHTML = 'Descending';
        }
        else {
            setOrder('asc');
            button.innerHTML = 'Ascending';
        }
    }
    let singerName = props.match.params.name;
    singerName =singerName.toUpperCase();  
    useEffect(()=>{
            let url = `${process.env.REACT_APP_SEARCH_URL}?name=${singerName}`;
            const promise = fetch(url);
            promise.then(response=>{
                response.json().then(data=>{
                    if(currOrder === 'desc')
                    {data.sort((a, b)=>{
                        if(b.name < a.name)
                         return -1;
                        if(b.name > a.name)
                         return 1;
                        return 0; 
                    })}
                    else
                    {data.sort((a, b)=>{
                        if(a.name < b.name)
                         return -1;
                        if(a.name > b.name)
                         return 1;
                        return 0; 
                    })
                    }
                    setSongs(data);
                }).catch(err=>{
                    console.log('JSON Error is ', err);
                })
            }).catch(err=>console.log("Error is ",err));
    });
    if(songs.length===0)
    {
      return(
          <>
          <h3>Search Unsuccessful</h3>
          </>
      )
    }
    else if(songs.length===1)
    { return (
      <>
      <h3 className="songname">{singerName}</h3>
      {songs.map(song=>{
          return (<div>
            <img src={song.imageurl} style={imageStyle} alt={singerName}/>
            <p className="songname">{song.name}</p>
            <audio controls style={audioStyle}>
                <source src={song.url} type="audio/mp4"></source>
            </audio>
        </div>)
    })}
    </>
    )
    }
    else
    { return (
        <>
        <h3 className="songname">Songs of {singerName}</h3>
        <br />
        <button  className="btn btn-warning" id="orderbutton" onClick={changeOrder}>Changeorder</button>
        <span className="songname"> click to reverse order</span>
        <br />
        <br />
        {songs.map(song=>{
            return (<div>
              <img src={song.imageurl} style={imageStyle} alt={singerName}/>
              <p className="songname">{song.name}</p>
              <audio id="audio" controls style={audioStyle}>
                  <source src={song.url} type="audio/mp4"></source>
              </audio>
          </div>)
      })}
      </>
      )
    }
}