import React from 'react';
import {useState, useEffect} from 'react'
import Header from '../Header/Header.jsx'
import './App.css';
import Form from '../Form/Form.jsx';
import axios from 'axios'
import ShoppingList from '../Shoppinglist/ShoppingList.jsx';

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

















    const buyItem = (id) => {
        axios.put(`shopping/buy/${id}`)
        .then(response => {
            console.log(response);
            getShoppingList();
        }).catch((error) => {
            console.log(error);
        })
    }
 




    return (
        <div className="App">
            <Header />
            
            <main>
            <Form addItem={addItem}/>
                <p>Under Construction...</p>
                <ShoppingList shoppingList={shoppingList} deleteItem={deleteItem} buyItem={buyItem} />
            </main>
        </div>
    );

}

export default App;










