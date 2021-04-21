import React, { ReactNode, ReactElement } from "react";
import Sandbox from "./Sandbox";

// My Props
function Heading({ title }: { title: string }) {
   return <h1>{title}</h1>;
}

// ReactNode will take in anything
function HeadingWithContent({ children }: { children: ReactNode }): ReactElement {
   return <h2>{children}</h2>;
}

// Default Props
const defaultProps = {
   heading: <strong> Default Prop Heading </strong>,
};

function Container({
   heading,
   children,
}: { children: ReactNode } & typeof defaultProps): ReactElement {
   return (
      <div>
         <h2>{children}</h2>
         <h3>{heading}</h3>
      </div>
   );
}
Container.defaultProps = defaultProps;
function App() {
   return (
      <div className="App">
         <Sandbox />
      </div>
   );
}

export default App;
