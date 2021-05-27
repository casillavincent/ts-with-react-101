import React from "react";

const Hooks = () => {
   type mySetNumber = string | null;

   const [number, setNumber] = React.useState<mySetNumber>(null);

   return (
      <div>
         <h1>Working With Hooks</h1>
         <button
            onClick={() => {
               setNumber("vincent");
               console.log(number);
            }}
         >
            Click Me
         </button>
      </div>
   );
};

export default Hooks;
