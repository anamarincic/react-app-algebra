import {Avatar} from "./Avatar";
import "./User.css";

function User({src,alt, children}){
    return <div className="user">
        <Avatar src={src} alt={alt}/>
        <h2>{children}</h2>
    </div>
}

export default User;