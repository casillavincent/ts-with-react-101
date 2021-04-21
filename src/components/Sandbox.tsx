import React, { ReactElement, ReactNode } from "react";

// DefaultProps
type defProps = {
   message: string;
};
const ChildComponent = ({ message }: defProps): JSX.Element => <p>{message}</p>;

// With Children
const WithChildren = ({ children }: { children: ReactNode }): JSX.Element => {
   return <p>{children}</p>;
};

const Sandbox = () => {
   return (
      <div>
         <h1>Sandbox</h1>
         <ChildComponent message="Works" />
         <WithChildren>
            <button>Works</button>
         </WithChildren>
      </div>
   );
};

export default Sandbox;
