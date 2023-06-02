import './ItemDisplay.css'





function PurchasedItems (props) {
const item = props.item;

    return (


        <li div ="itembox">
        {item.name} 
        {item.quantity} {item.unit}
        <p>Purchased</p>
    </li>

        <div class="item">
            <p>{item.name}</p> 
            <p>{item.quantity} {item.unit}</p>
            <p>Purchased 🤑🤑🤑</p>
        </div>



    )
}




export default PurchasedItems
