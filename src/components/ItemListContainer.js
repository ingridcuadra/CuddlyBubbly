import React from 'react';
import { useState } from 'react';

const ItemListContainer = (props) => {
    return (
        <div>
            <h1>{props.greeting}</h1>
        </div>
    );
}

export default ItemListContainer;