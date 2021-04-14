import React, { useState } from "react";
import Button from "./Button";

function App() {
  const [answer, setAnswer] = useState(0);
  const [args, setArgs] = useState([] as number[]);
  const [input, setInput] = useState(0);
  const [displayAnswer, setDisplayAnswer] = useState(false);

  const add = () => {
    let sum = answer;
    setArgs([...args, input]);
    sum += +input;

    displayTheAnswer(sum)
  };

  const displayTheAnswer = (answer: number) => {
    setDisplayAnswer(true);
    setAnswer(answer);
    setInput(answer);
  };

  const getAnswer = () => {
    if (!displayAnswer) {
      let result = input;

      args.forEach((arg) => {
        result += arg;
      });

      setArgs([...args, input]);

      displayTheAnswer(result);
    }
  };

  const appendInput = (num: number) => {
    let newValue: string;
    if (displayAnswer) {
      setDisplayAnswer(false);
      setInput(num);
      return;
    }

    newValue = input.toString().concat(num.toString());
    setInput(+newValue);
  };

  const clearEverything = () => {
    setInput(0);
    setArgs([] as number[]);
    setAnswer(0);
  };

  return (
    <div className={"calc bg-gray-400 w-48 p-2 m-4 rounded-lg"}>
      <input
        className={"user-input w-full rounded px-2 text-right"}
        type={"number"}
        data-testid={"user-input"}
        value={input}
        onChange={(event) => setInput(+event.target.value)}
      />
      <div className={"flex flex-row w-full"}>
        <div className={"flex flex-row flex-wrap justify-evenly"}>
          {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((symbol, idx) => {
            return (
              <Button
                key={idx}
                symbol={symbol.toString()}
                onClick={() => {
                  appendInput(symbol);
                }}
              />
            );
          })}
        </div>
        <div className={"flex flex-col"}>
          <Button symbol="CE" onClick={clearEverything} />
          <Button symbol="+" onClick={add} />
          <Button symbol="=" onClick={getAnswer} />
        </div>
      </div>
    </div>
  );
}

export default App;
