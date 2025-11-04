'use client'

import {useState} from "react";

export default function Contador() {
    // Estado [Nome do estado (variável), Nome da função que vai atualizar o estado]
    const [count, setCount] = useState(0) // Hooks

    return (
    <>
        <input type="text" value={count} readOnly/>
        <button type="button" onClick={() => setCount(count-1)}>-</button>
        <button type="button" onClick={() => setCount(count+1)}>+</button>
    </>
    );
}