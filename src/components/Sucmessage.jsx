import "./Sucmessage.css";

function FormMessage(props) {
    if(!props.visible) return null;
  
    return <div className="form-message">Successfully to sign in!</div>
  }

  export default FormMessage;