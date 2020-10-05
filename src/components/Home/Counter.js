import React, { useEffect } from "react";
import { Button } from "semantic-ui-react";

const Counter = ({
  toggle,
  setToggle,
  quantity,
  setQuantity,
  setSelectedOption,
}) => {
  useEffect(() => {
    console.log(toggle);
    if (toggle) setQuantity(quantity + 1);
    else setQuantity(0);
  }, [toggle]);

  useEffect(() => {
    if (quantity === 0 && toggle === true) {
      setToggle(false);
      setSelectedOption(null);
    }
  }, [quantity]);

  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div>
      <span className="block squeeze">
        <p className="outline">{quantity}</p>
      </span>
      <span className="block">
        <Button disabled={!toggle} onClick={increment}>
          +
        </Button>
        <Button
          disabled={quantity < 1 || !toggle ? true : false}
          onClick={decrement}
        >
          -
        </Button>
      </span>
    </div>
  );
};

export default Counter;
