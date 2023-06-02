





function PurchasedItems (props) {
const item = props.item;

    return (

        <div>
            {item.name} 
            {item.quantity} {item.unit}
            <p>Purchased</p>
        </div>


    )
}




export default PurchasedItems
