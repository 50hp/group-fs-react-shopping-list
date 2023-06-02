import {useState} from 'react';
import ManagementButtons from './ShoppinglistParts/ManagmentButtons.jsx';
import ItemDisplay from './ShoppinglistParts/ItemDisplay.jsx';
import PurchasedItems from './ShoppinglistParts/ItemDisplay2.jsx';

function ShoppingList(props) {
        const deleteItem = props.deleteItem;
        const buyItem = props.buyItem;
        const getShoppingList = props.getShoppingList
        const clearItems = props.clearItems;

    return(
            <div>

                <ManagementButtons getShoppingList={getShoppingList} clearItems={clearItems}/>

                 <div>
                    {props.shoppingList.map(item => (
                        item.purchase_status ? (
                            <PurchasedItems item={item} key={item.id}  />
                        ):(
                            <ItemDisplay item={item} deleteItem={deleteItem} buyItem={buyItem} key={item.id} />

                        )





                        
                    ))}
                </div>


            </div>


    );




}

export default ShoppingList;


