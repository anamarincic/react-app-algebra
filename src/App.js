import "./App.css";
import {Input} from "./components/Input";
import Button from "./components/Button";

function App() {
  return (
    <form className="form">
      <div className="form-field">
        <Input label="Username" type="text"/>
      </div>
      <div className="form-field">
        <Input label="Password" type="password" />
      </div>
      <div className="form-field">
        <Button type="button">Sign in</Button>
        <Button type="reset">Reset</Button>
      </div>
    </form>
  );
}

export default App;
