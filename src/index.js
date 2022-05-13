import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// What you see in the browser in the end is the result of this line executing
// Call render method on "reactDom" object, we pass the HTML code "<App />" (known as JSX code/HTML in Javascript code)
// JSX is special syntax not understood by browser
// Second argument in render method/the "document.getElementById('root'))" thing just tells React
// where the first element should be rendered in the real dom
// Here elment is being selected by ID 'root', can be found in "public" folder in the index.html file
// that html file is the single html file that makes up the react application 
// Essentially says we wanna render our App HTML element/our custom HTML element, defined in App.js file,
// into this place/the second argument/element with that root ID
// which is why if you inspect element the page, you can see the content you wrote in place of where that rootID thing is now
// When it runs in the browser, will not render the custom elements in App but instead render the content returned by custom elements in App  
ReactDOM.render(<App />, document.getElementById('root'));

