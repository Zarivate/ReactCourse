// This just holds another component/React components are just functions
// React wants custom components to start with a capital character
// We have to return something that can be rendered to turn a function into a component
// Now if you want to edit something about the Todo component, just need to do it in this file
// Making things more configurable means making them more individually customizable as opposed to having them all change at once
// To do so you need to use "props"/anything you wanna name it, called props tho cause that's what the concept is called
// props is a JS object where all the attributes added onto an element are available as key value pairs in the props object
// In the App.js the Key would be "text" while the value would be the well... actual text
// Anything in the curly braces inside will be executed as Javascript code instead of plaintext
// If you want to listen in on an object need to add extra attribute, like what we did for button
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  // We don't want the Modal to be open so we set it to false to start
  // This way useState returns an array with exactly 2 elements
  // Second element is function that lets you change that value, in other words you always call second value to assign new value/it to true/false
  // Whenever you call this state changing function, React will reexecute the component function that the state belongs, revealuate it, and update what's on screen
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        {/* In this the value we assing the onCluck attribute is a dynamic expression/function that happens when a click is done
          make sure to not have () when using functions cause will cause it to be executed when JS and React evaluate this part of the code*/}
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {/* This is how we check to see whether to render the Modal or not 
        can also be written as "modalIsOpen ? <Modal /> : null" as a turnuary expression but
        since && checks to see whether both conditions are true, and a function like <Modal /> is always true
        but modalIsOpen is not, we can do this shortcut 
        Reason we don't create a function to close Modal and pass it into Backdrop is cause it's our own component and it doesn't have 
        don't known onClick props/few to none built in props. We have to build that ourselves by adding props to Backdrop.js first*/}

      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
