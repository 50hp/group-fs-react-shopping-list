import './ItemDisplay.css'





function PurchasedItems (props) {
const item = props.item;

    return (

        <li div ="itembox">
        {item.name} 
        {item.quantity} {item.unit}
        <p>Purchased</p>
    </li>


    )
}




export default PurchasedItems