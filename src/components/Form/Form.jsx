import {useState} from 'react';


function Form({addItem}) {
    
    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity] = useState('');
    const [itemUnit, setItemUnit] = useState('');

    let item = {};
    const handleSubmit = (event) => {

        event.preventDefault();

        if(itemUnit && itemQuantity && itemUnit){
            item ={
                name: itemName,
                quantity: itemQuantity,
                unit: itemUnit
            }

            addItem(item);


        }else{
            alert('all imputs must have a value');
            return
        }

    }


    return(

        <div>
            <form onSubmit={handleSubmit}>

                <label htmlFor="nameInput">Name: </label>
                <input id="nameInput"
                       value = {itemName}
                       onChange={e => setItemName(e.target.value)}/>

                <label htmlFor="quanityInput">Quanity:</label>
                <input id="quanityInput"
                       value = {itemQuanity}
                       onChange={e => setItemQuantity(e.target.value)}/>

                <label htmlFor="unitInput">Unit:</label>
                <input id="unitInput"
                       value = {itemUnit}
                       onChange={e => setItemUnit(e.target.value)}/>
                <button type="submit">Done</button>
            </form> 

        </div>
    );



}



export default Form;
