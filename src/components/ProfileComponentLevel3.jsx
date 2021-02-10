
import {myNameContext} from "../App";

/* This component is at level 3 and here we are using 'context.Consumer' to receive the props  */

/* Just creating a function which will return the JSX. Note we are passing the 'context.value' in the argument along
   with regular props  */
const renderData = (value, props) => {
    const {address, user, setUser} = value;   // Destructuring the objects passed via 'context.Provider'
    return (<div>
        <h2>Hello, using Consumer</h2>
        <h2>{user.name}</h2>
        <h2>{address.city}</h2>
        <h2>{props.testProp}</h2>   { /* Note: This props is not part of context. So it is received via 'props' keyword directly */}
        <button id='btn' onClick={()=>{setUser({name: "Kabhi"})}}>Update Name</button> {/* calling state updater in onClick using call back */}
    </div>);
}


/* Main function which will render the JSX.
   Note: context.Consumer uses callback where the passed 'context.value' is set in the argument
   Note: A regular props is also received from parent which is not part of context.
*/

function ProfileComponentLevel3(props) {
    return (
        <myNameContext.Consumer>
            { (value) => {
                return (
                    renderData(value, props)   // Calling the function and passing 'context.value'. Can use the JSX template directly too.
                );
               }
            }
        </myNameContext.Consumer>
    );
}

export default ProfileComponentLevel3;


/* Without context.Consumer, we'll have to use the following JSX where props are passed from Parent component  */
/*
<div>
    <h2>Hello</h2>
    <h2>{props.data.name}</h2>
</div>
*/
