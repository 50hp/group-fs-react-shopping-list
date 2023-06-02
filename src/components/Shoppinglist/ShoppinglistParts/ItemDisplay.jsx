import './ItemDisplay.css'

function ItemDisplay(props){
    const item = props.item;
    const deleteItem = props.deleteItem;
    const buyItem = props.buyItem; 

        return (
                     <div class="item">
                        <p>{item.name}</p>
                        <p>{item.quantity} {item.unit}</p>
                        <p>
                        <button onClick={() => buyItem(item.id)}>Buy 💰</button>
                        <button onClick={() => deleteItem(item.id)}>Delete 🗑️</button>
                        </p>
                    </div>

        );

}

export default ItemDisplay;
