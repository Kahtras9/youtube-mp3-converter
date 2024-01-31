import React, {useState, useEffect} from 'react';
import './App.css'
import {fetch} from './Api'

const App = () => {
    const [link, setLink] = useState ('');
    const [id, setId] = useState (null);
    const [response, setResponse] = useState (null);
    const [disabled, setDisabled] = useState (false);

    useEffect(() => {
        if (id) {
            const fetchData = () => {
                let interval = setInterval(async function() {
                    setDisabled(true);
                    //When the request starts, we disable our button
                    const res = await fetch(id);
          
        if (res.status === 200 && res.data.status === "ok") {
            //When the request finishes, we need to enable the button again
            setDisabled(false);
            setResponse(res.data);
            //if the song is fully converted, no need to loop anymore.
            clearInterval(interval);
          } else if (res.status === 200 && res.data.status === "fail") {
            alert("Invalid video ID");
            setDisabled(false);
            clearInterval(interval);
          }

        }, 2000);
      }

      fetchData();
    }
  }, [id]);           //request only happens when the id changes

    useEffect (() => {
        if (response) {
            window.location.href = response.link;
        }
    }, [response]);


    return (
        <div className="app">
            <h1 className="title"> YouTube to MP3 Converter</h1>
                <h3 className='description'> Please insert a valid YouTube video URL</h3>

            <div className="form">
                <input 
                    placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    type="text"
                    className="link"
                    value={link}
                    onChange= {(e) => {setLink(e.target.value)}}
                />

                <button onClick={() => {
                    const text = link.split("=")[1];       //used split here because the api only takes the id of youtube link after the = symbol

                    if (text) {
                        setId (text);
                    }
                }} type="submit" disabled={disabled} className={disabled ? "btn-disabled" : ""} > Download </button>   
            </div>
        </div>
    );
}

export default App;