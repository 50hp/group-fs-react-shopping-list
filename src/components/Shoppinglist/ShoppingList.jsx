import {useState} from 'react';
import ManagementButtons from './ShoppinglistParts/ManagmentButtons.jsx';
import ItemDisplay from './ShoppinglistParts/ItemDisplay.jsx';

function ShoppingList(props) {
        const deleteItem = props.deleteItem;
        const buyItem = props.buyItem;

    return(
            <div>

                <ManagementButtons />

                 <ul>
                    {props.shoppingList.map(item => (
                        <ItemDisplay item={item} deleteItem={deleteItem} buyItem={buyItem} key={item.id} />
                    ))}
                </ul>


            </div>


    );




}

export default ShoppingList;


