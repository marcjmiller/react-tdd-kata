import React from "react";

interface OwnProps {
  symbol: string;
  onClick: () => void;
}

function Button({ symbol, onClick }: OwnProps) {
  return (
    <div
      className={"button bg-gray-50 rounded w-6 h-6 m-2 text-center cursor-pointer"}
      onClick={onClick}
    >
      <span className={""}>{symbol}</span>
    </div>
  );
}

export default Button;
