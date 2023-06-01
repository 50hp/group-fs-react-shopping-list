





function PurchasedItems (props) {
const item = props.item;

    return (

        <li>
        {item.name} 
        {item.quantity} {item.unit}
        <p>Purchased</p>
    </li>


    )
}




export default PurchasedItems