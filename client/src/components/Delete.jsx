import React from 'react';
import axios from 'axios'

const Delete = (props) => {
    const {id,reload } = props

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/pirates/${id}`)
            .then(res => {
                reload()
            })
            .catch(err => console.log(err))
    }

    return (
        <button onClick={deleteHandler}>
            Walk the plank!
        </button>
    )
};

export default Delete;
