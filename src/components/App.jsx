import React from "react";
import Heading from "./Heading";
import PI, { doublePi, tripplePi, SpeedofLight } from "./Math"; // This name can be different as it is default
function App() {
  // This also works
  //return Heading();
  return (
    <div>
      <Heading />
      <ul>
        <li>
          <PI />
        </li>{" "}
        (// Works as PI is default and can be a variable)
        <li>{PI()}</li> (// works as PI() is also a function)
        <li>{doublePi()}</li> (// works only as a function)
        <li>{tripplePi()}</li>
        <li>
          <doublePi />
        </li>
        (// does not work)
        <li>{SpeedofLight}</li>
      </ul>
    </div>
  );
}

export default App;
