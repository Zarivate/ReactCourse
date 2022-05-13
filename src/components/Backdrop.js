// This is what gives the backdrop that makes user unable to interact with background while pop up is up
function Backdrop(props) {
   // This div has no content so we cna write it as self closing tag 
   return <div className='backdrop' onClick={props.onCancel} />;
}

export default Backdrop;