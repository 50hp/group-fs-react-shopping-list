import {useState} from 'react';
import './Form.css';


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
                <div className ='nameInput '>
                <label htmlFor="nameInput">Name:  </label>
                <input className ='input'id="nameInput"
                       value = {itemName}
                       onChange={e => setItemName(e.target.value)}/>
                      </div>
                      <div className='bottom'>
                <div className='quantity'>
                <label htmlFor="quantityInput">Quanity:</label>
                <input className='input-2'id="quantityInput"
                       type="number"
                       value = {itemQuantity}
                       onChange={e => setItemQuantity(e.target.value)}/>
                    </div>
                    <div className='unit'>
                <label htmlFor="unitInput">Unit:</label>
                <input className='input-3' id="unitInput"
                       value = {itemUnit}
                       onChange={e => setItemUnit(e.target.value)}/>
                       </div>
                       </div>

                <button type="submit">Done</button>
               
            </form> 


        </div>
    );



}



export default Form;
