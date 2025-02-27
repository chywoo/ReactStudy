import React from 'react'
import { judgeWinner } from './App';

function Cell({ value, isO, onClick }) {

    // if isO is true, then the text of cell is blue, otherwise red
    const cls = value == "O" ?
        'border rounded-md text-bold text-3xl bg-white border-gray-600 text-blue-600' :
        'border rounded-md text-bold text-3xl bg-white border-gray-600 text-red-600';

    console.log("value: ", value, cls);

    return (
        <button onClick={onClick} className={cls}>{value}</button>
    )
}

export default Cell
