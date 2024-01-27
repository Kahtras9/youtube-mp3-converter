import React from 'react';
import './App.css'

const App = () => {
    return (
        <div className="app">
            <h1 className="title"> YouTube to MP3 Converter</h1>
                <h3 className='description'> Please insert a valid YouTube video URL</h3>

            <div className="form">
                <input 
                    placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    type="text"
                    className="link"
                />

                <button onClick="" type="submit" className="button"> Convert </button>   

                <button type="submit" className="download"> Download</button>
            </div>
        </div>
    );
}

export default App;