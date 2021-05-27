// import React, { ReactNode, ReactElement, useState } from "react";
import Basics from "./components/Basics";
import Hooks from "./components/Hooks";

// Functional Props
// const TextWithNumber = ({ children }: { children: (num: number) => ReactNode }) => {
//    const [state, setState] = React.useState<number>(1);
//    return (
//       <div>
//          <div>
//             <button
//                onClick={() => {
//                   setState(state + 1);
//                }}
//             >
//                Works
//             </button>
//          </div>
//       </div>
//    );
// };

function App() {
   return (
      <div className="App">
         <Hooks />
         <Basics />
      </div>
   );
}

export default App;
