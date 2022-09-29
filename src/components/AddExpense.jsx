import React, {useContext, useState} from "react";
import { AppContext } from "./Context/AppContext";
import {v4 as uuidv4 } from 'uuid';


const AddExpenseForm = () => {
    const {dispatch} = useContext(AppContext);

    const [name,setName] = useState('');
    const [cost,setCost] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const expense ={
            id:uuidv4(),
            name:name,
            cost:parseInt(cost),
        }

        dispatch({
            type:'ADD_EXPENSE',
            payload: expense,
        })
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="sm">
                    <label>Name</label>
                    <input
                        id="name"
                        required
                        placeholder="Expense Name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="sm">
                    <label>Cost</label>
                    <input
                        id="cost"
                        required
                        placeholder="Expense Cost"
                        type="text"
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                        className="form-control"
                    />
                </div>

                <div className="sm mt-2">
                   <button type ="submit" className="btn btn-primary">Save</button>
                </div>
            </div>
        </form>
    );
}

export default AddExpenseForm;