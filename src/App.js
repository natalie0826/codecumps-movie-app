import React, { Component } from 'react';

const App = () => {
    console.log('API key:', process.env.REACT_APP_TMDB_API_KEY);
    return (
        <h1>Welcome to React</h1>
    );
}

export default App;
