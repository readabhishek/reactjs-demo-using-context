
/*
This is another example where we are using 2 functions. 1) Wrapper function which acts as the parent function to receive the
data from 'context.Consumer' and then passes the data to function number 2 as props. Now the 2nd function gets the data as props
and uses it in it's own way to render the JSX.

Question: Why do we need to do this way?
Ans: Because '<myNameContext.Consumer>' can be only used inside the render/return block and hence the 'value' or the data can only be used
     inside JSX. What if we want to use the 'value'/data/props inside life-cycle methods like 'ComponentDidMount'


 */



import {myNameContext} from "../App";
import React, { useState, useEffect } from 'react';


/*
Defining this wrapper function just to consume the 'context' props and send those to child component defined below as regular props.
This is done so that the below function/component gets the passed values as regular props and can use them anywhere as needed.
 */
function WrapperHeaderCompLevel3 () {
    return(
        <myNameContext.Consumer>
            { (value) => {
                    return(
                        <HeaderCompLevel3 value={value}/>
                    );
                }
            }
        </myNameContext.Consumer>
    );
}

function HeaderCompLevel3 (props) {
    const {address, user, setUser} = props.value;

    useEffect(() => {
        const {address, user, setUser} = props.value;
        /* Do something  here  */
        /* Note: We can use the props in this life-cycle method. Without wrapper function defined above, this was not possible
                 because, using 'context.Consumer' we can only use inside the below return() statement and hence can't get hold
                 of those props passed by 'context.Provider' in the 'useEffect' or any other life-cycle methods
        */

    }, [address]);

    return (
        <div>
            <h2>Hello, Now this is called from HeaderCompLevel3. This uses wrapper function and passes value as Props. Check this out</h2>
            <h2>{user.name}</h2>
            <h2>{address.city}</h2>
            <h2>{props.testProp}</h2>   { /* Note: This props is not part of context. So it is received via 'props' keyword directly */}
            <button id='btn' onClick={()=>{setUser({name: "Kabhi"})}}>Update Name</button> {/* calling state updater in onClick using call back */}
        </div>
    );
}



export default WrapperHeaderCompLevel3;
