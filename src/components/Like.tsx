import React from "react";
// import { FcLike } from "react-icons/fc";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [visible, setVisible] = useState(true);
  const toggle = () => {
    setVisible(!visible);
    onClick();
  };
  if (visible)
    return <AiFillHeart color="#ff6b81" size="40" onClick={toggle} />;
  return <AiOutlineHeart size="40" onClick={toggle} />;
};

export default Like;
