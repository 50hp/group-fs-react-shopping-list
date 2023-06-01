import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';
import From from '../Form/Form.jsx';


function App() {
    











































   



    const addItem = (item) => {

    axios.post('/shopping', item)
        .then((res) => {
            getShoppinglist();
        }).catch((err) => {
            alert('error with post requset', err);
        });

    }























    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );









}

export default App;
