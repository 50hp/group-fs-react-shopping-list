import React from 'react';
import {useState, useEffect} from 'react'
import Header from '../Header/Header.jsx'
import './App.css';
import Form from '../Form/Form.jsx';
import axios from 'axios'


function App() {
    const [shoppingList, setShoppingList] = useState([])

    const addItem = (item) => {

    axios.post('/shopping', item)
        .then((res) => {
            getShoppingList();
        }).catch((err) => {
            alert('error with post requset', err);
        });

    }

    const getShoppingList = () => {
        axios.get('/shopping').then(response => {
            setShoppingList(response.data)
        }).catch(error => {
            console.log('Error with GET request', error)
            alert('Error getting your shopping list, try again later')
        })
    }

    useEffect(() => {
        getShoppingList();
    }, [])


    const deleteItem =  (id) => {
        axios.delete(`shopping/${id}`)
        .then(response => {
            console.log(response);
            getShoppingList();
        }).catch((error) =>{
            console.log(error);
        }) 
    }





    return (
        <div className="App">
            <Header />
            
            <main>
            <Form addItem={addItem}/>
                <p>Under Construction...</p>
                <ul>
                    {shoppingList.map(item => (
                        <li key={item.id}>
                            {item.name} 
                            {item.quantity} {item.unit}
                            <button>Buy</button><button onClick={() => deleteItem(item.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );

}

export default App;










