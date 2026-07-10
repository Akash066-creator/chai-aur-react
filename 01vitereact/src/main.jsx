import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// function MyApp(){
//     return (
//         <h1>custom App !</h1>
//     );
// }
// const reactElement = {
//     type : 'h1',
//     prop : {

//     },
//     children : 'hello Akash'
// }

// we can't write conditional statement into object 

const anotheUser = 'chai aur code'
const reactElement = React.createElement(
    'h1',
    {},
    'hello Akash',
    anotheUser  // variable injection at the last
    // 'a',
    // {href:'https://google.com', target:'_balnk'},
    // 'click'
)
const anotherElement = (
    <a href="https://google.com" target="_blank">visit google</a>
)
createRoot(document.getElementById('root')).render(

    reactElement
    // anotherElement
    // reactElement => will not execute because render expect some spacial format 
    // <MyApp />
    // MyApp()
    // <App />
)
