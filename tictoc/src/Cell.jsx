import React from 'react'
import { judgeWinner } from './App';
import { useEffect } from 'react';
import { gsap } from 'gsap';

function Cell({ cellIndex, value, isO, onClick }) {

    // if isO is true, then the text of cell is blue, otherwise red
    let cls = 'border rounded-md text-bold text-3xl bg-white border-gray-600 '
    cls += value === "O" ? 'text-blue-600' :
        value === "X" ? 'text-red-600' : '';

    useEffect(() => {
        if (value) {
            gsap.to(
                `#cell-${cellIndex}`,
                { rotationY: 360, duration: 1, ease: "power1.inOut" }
            );
        }
    }, [value]);
    return (
        <button onClick={onClick} className={cls}><div id={`cell-${cellIndex}`}>{value}</div></button>
    )
}

export default Cell
