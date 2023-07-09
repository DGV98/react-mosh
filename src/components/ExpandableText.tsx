import { useState } from "react";
import React from "react";

interface Props {
  children: string;
  maxLength?: number;
}

const ExpandableText = ({ children, maxLength = 100 }: Props) => {
  const [vis, setVis] = useState(false);
  if (children.length < maxLength) return <div>{children}</div>;
  const text = vis ? children.substring(0, maxLength) + "..." : children;
  return (
    <p>
      {text}
      <button onClick={() => setVis(!vis)}>{vis ? "More" : "Less"}</button>
    </p>
  );
};

export default ExpandableText;
