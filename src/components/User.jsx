import {Avatar} from "./Avatar";

function User({src,alt, children}){
    return <div>
        <Avatar src={src} alt={alt}/>
        <h2>{children}</h2>
    </div>
}

export default User;