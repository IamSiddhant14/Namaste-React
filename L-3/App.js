import React, { createElement } from "react";
import ReactDOM from "react-dom/client";


const ele1 = React.createElement('h1', {

    id: "myId1",
    className: "myClassName1",
    style: { color: "red", backgroundColor: "blue" },
    key: 1

},

    'Hello from REACT1'

);


console.log(ele1);


//This is a React element

const Adv2 = <h1 id="title" key="k1" className="c1" src="">  Hello  </h1>;

const Adv3 = (<h1 id="title" key="k1" className="c1" src="">  Hello From JSX from
 Line number 24 </h1>);


// Functional component(React component)
const HeaderComponent2 = () =>

(
    <div>
        <h1>Namaste React2.1</h1>
        <h1>Namaste React 2.2</h1>
    </div>
)

// Component compostion refer to component inside one another
const HeaderComponent = () => {

    return (
        <div>
            {/*  we have used jsx element inside react component */}
            {Adv2}
            <HeaderComponent2 />
            {/* or */}
            {HeaderComponent2 ()} 
            {/* { Any piece of js code could be wrote inside this curly braket } */}
            {1+2}
            <h1>Namaste React</h1>
            <h1>Namaste React 2</h1>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(Adv2);
// Below line will override the above line
root.render(<HeaderComponent />);