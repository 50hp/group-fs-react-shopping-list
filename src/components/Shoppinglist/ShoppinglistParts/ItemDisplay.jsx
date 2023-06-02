

function ItemDisplay(props){
    const item = props.item;
    const deleteItem = props.deleteItem;
    const buyItem = props.buyItem; 

        return (
                     <div>
                        {item.name} 
                        {item.quantity} {item.unit}
                        <button onClick={() => buyItem(item.id)}>Buy</button>
                        <button onClick={() => deleteItem(item.id)}>Delete</button>
                    </div>

        );

}

export default ItemDisplay;
