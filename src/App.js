import "./App.css";
import { Input } from "./components/Input";
import Button from "./components/Button";
import FormError from "./components/Errormessage";
import FormMessage from "./components/Sucmessage";
import User from "./components/User";
import {Counter} from "./components/Counter";


function App() {
  const isSignedIn = false;

 /**  let formMessageComponent = null;
  if(isSignedIn){
    formMessageComponent= (
      <div className="form-massage">
        Successful sign in!
      </div>
    );

    {!isSignedIn && <div className="form-error">
        Failed to sign in!
      </div>}
      {formMessageComponent}
  }**/


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
       <FormError visible={!isSignedIn} />
       <FormMessage visible={isSignedIn} /> 
       {isSignedIn && <User src="./avatar.png" alt="userPicture">Ana</User>}
       <Counter>0</Counter>
    </form>
  );
}

export default App;
