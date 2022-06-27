import "./Input";

function Input({label, type}){
    return (
      <label>
      <div className="label">{label}</div>
      <input className="input" type ={type} />
    </label>
    );
  }

export default Input;