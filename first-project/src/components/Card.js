import React, { useState } from 'react';

export function Card () {
    //const {name } = props;
    const [name, setName] = useState("Test");
    return (
        <div className="card-wrapper">
            {name || "MY CARD"}
        </div>
    )
}