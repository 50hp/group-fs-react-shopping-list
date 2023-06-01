

function ItemDisplay(props){
    const item = props.item;
    const deleteItem = props.deleteItem;
    const buyItem = props.buyItem; 

        return (
                     <li>
                        {item.name} 
                        {item.quantity} {item.unit}
                        <button onCLick={() => buyItem(item.id)}>Buy</button>
                        <button onClick={() => deleteItem(item.id)}>Delete</button>
                    </li>
        );

}

export default ItemDisplay;
