import React from 'react';
const background = require('./../assets/background.jpg');

export default function(){
    return(
        <div className="header">
            <img src={background}/>
        </div>
    );
}