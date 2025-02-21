import React from 'react'

const Cell = ({ row, col, data, onClick }) => {
    return (
        <button onClick={onClick} className="square" > {data[row][col]}</button>
    );
}

export default Cell;