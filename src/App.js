import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Test01 from "./component/test01/test01";
import Test2 from "./component/test01/test2/test2";
import MemeGenerator from "./component/newpro/MemeGenerator";

function App() {
  return (
    <div className="app">
      <MemeGenerator />
    </div>
  );
}

export default App;
