import React from 'react';
import Header from './components/Header/Index';
import Resume from './components/Resume';

import GlobalStyle from'./styles/global'

function App() {
    return (
        <>
        <Header/>
        <Resume/>
        <GlobalStyle/>
        </>
        
    );
}

export default App;