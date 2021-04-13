import React, { useState } from "react";
import Button from "./Button";

function App() {
  const [answer, setAnswer] = useState(0);
  const [args, setArgs] = useState([] as number[]);
  const [input, setInput] = useState(0);

  const add = () => {
    setArgs([...args, input]);
    setInput(0);
  };

  const getAnswer = () => {
    let result = 0;

    args.map((arg) => {
      result += arg;
    });

    setAnswer(result);
    setInput(answer);
  };

  const clearEverything = () => {
    setInput(0);
    setArgs([] as number[]);
    setAnswer(0);
  };

  return (
    <div className={"calc bg-gray-400 w-1/4 p-2 m-4 rounded-lg"}>
      <input
        className={"user-input w-full rounded px-2 text-right"}
        type={"number"}
        data-testid={"user-input"}
        value={input}
        onChange={(event) => setInput(+event.target.value)}
      />
      <Button symbol="+" onClick={add} />
      <Button symbol="=" onClick={getAnswer} />
      <Button symbol="CE" onClick={clearEverything} />
    </div>
  );
}

export default App;
