// import { Children } from "react";

// i don't want to return element from function
// i directly create that html element here 
// and how react takes an element when we return from function looks like bellow

// each element should be implemented in react like below
const reactElement = {
    type : 'a',
    props : {
        href : "https://google.com",
        target : "_blank"
    },
    children : "click me to visit google"
}

const mainContainer = document.querySelector('#root');

// to render on webpage
customRender(reactElement, mainContainer);
// how custom Render works under the hood

// to inject reactElement on root using custome render

function customRender(reactElement, mainContainer){
    // problem is there 
    // if only one or more than two attributes need be set then this will not work
    /*
    // create an element on webpage using DOM
    const domElement = document.createElement(reactElement.type);
    //element text
    domElement.innerHTML = reactElement.children;
    //setting attributes
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);

    mainContainer.appendChild(domElement);
    */

    // so use loop
    const domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
       
         if(prop === 'children')
            continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    mainContainer.appendChild(domElement);
}



