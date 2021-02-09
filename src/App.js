
/*
This is to demonstrate the use of context.Provider and context.Consumer

*/

import './App.css';
import UserProfile from "./components/UserProfile";
import {createContext, useState} from 'react';


/* Create a context. We can create multiple contexts and pass multiple contexts too  */
export const myNameContext = createContext(null);


/*  Just an address object */
const address = {
  City: 'Parkland'
}


function App() {

  /* Using react hook to create a user state (it's an object which stores name, can be made more complex object)
     setUser is the setter/updater of the state.
  */
  const [user, setUser] = useState({name: 'Abhi'});

  return (
      <myNameContext.Provider value={{address, user, setUser}}> {/* Passing address, user state and state updater from context */}
        <UserProfile />
      </myNameContext.Provider>

  );
}

export default App;
