import react from 'react'
import axios from 'axios'


function ManagementButtons(props) {
    const getShoppingList = props.getShoppingList
    const clearItems = props.clearItems

    const resetItems = () => {
        let id = 0
        axios.put(`shopping/reset/${id}`)
        .then(response => {
            console.log(response)
            getShoppingList();
        }).catch((error) => {
            console.log(error)
        })
    }

        return (
            <div>
            <button onClick={resetItems}>Reset</button>
            <button onClick={ ()=> clearItems()}>Clear</button>

            </div>



        );



}

export default ManagementButtons;
