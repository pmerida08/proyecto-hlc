'use client';
import { useState } from "react";

const Button = ({ increment, onClick }) => {
  const handleClick = () => {
    onClick(increment);
  };
  return <button onClick={handleClick}>+{increment}</button>;
};

export default function Contando() {
  const [count, setCount] = useState(0);

  const incrementCount = (increment) => {
    setCount(count + increment);
  };

  return (
    <div className="component">
      <h2>Componente Contadores</h2>
      <div id="btns">
      <Button increment={1} onClick={incrementCount} />
      <Button increment={10} onClick={incrementCount} />
      <Button increment={100} onClick={incrementCount} />
      <Button increment={1000} onClick={incrementCount} />

      <span id="resultCalc">{count}</span>
      </div>
    </div>
  );
}
