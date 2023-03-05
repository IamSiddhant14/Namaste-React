import React from "react";
import ReactDOM from "react-dom/client";


const ele1 = React.createElement('h1', {
        
    id:"myId1",
    className:"myClassName1",
    style: {color: "red", backgroundColor: "blue"}

}, 

'Hello from REACT1' 

);

const ele2 = React.createElement('h1', {
    
    id:"myId2",
    className:"myClassName2",
    style: {color: "red", backgroundColor: "blue"}

}, 

'Hello from REACT2'

);


const ele3 = React.createElement('div', {     
    id:"container",
}, 

[ele1 , ele2]

);

const root =ReactDOM.createRoot(document.getElementById('root'));

root.render(ele3);

