import react from 'react'
import axios from 'axios'


function ManagementButtons(props) {
    const getShoppingList = props.getShoppingList

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
            <button>Clear</button>

            </div>



        );



}

export default ManagementButtons;
