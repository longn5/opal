import React, { useContext, useState } from "react";
import { Button, Card, Grid } from "semantic-ui-react";
import { ApplicationContext } from "../../context/application";
import Counter from "./Counter";

const MenuCard = ({ item }) => {
  const [selected, setSelected] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [toggle, setToggle] = useState(false);

  const [appState, dispatchApp] = useContext(ApplicationContext);

  const handleClick = (e, value) => {
    setSelected(value);
    toggle ? setToggle(false) : setToggle(true);
  };

  const handleOptions = (e, value) => {
    setSelectedOption(value);
  };

  const checkDisabled = (index) => {
    if (index !== selectedOption) return true;
    return false;
  };

  const resetCart = () => {
    setSelected(null);
    setToggle(false);
    setSelectedOption(null);
  };

  const addToCart = () => {
    const order = [
      { item: selected, option: selectedOption, quantity: quantity },
    ];
    dispatchApp({
      type: "add-to-cart",
      items: [...appState.cart.items, ...order],
    });
    resetCart();
    console.log(appState);
  };

  return (
    <Card fluid>
      <Card.Content>
        <Grid columns={3}>
          <Counter
            toggle={toggle}
            setToggle={setToggle}
            quantity={quantity}
            setQuantity={setQuantity}
            setSelectedOption={setSelectedOption}
          />
          <Button
            className="btn-item-name"
            basic={toggle ? false : true}
            color="orange"
            value={item.item}
            onClick={(e, { value }) => handleClick(e, value)}
          >
            {item.item}
          </Button>

          {item.options.map((option, index) => (
            <Button
              className="btn-options"
              basic={checkDisabled(option)}
              color="orange"
              value={option}
              onClick={(e, { value }) => handleOptions(e, value)}
              key={index}
            >
              <p>{option.size.toUpperCase()}</p>
              <p>{option.price}</p>
            </Button>
          ))}
          <Button className="align-right-mid" onClick={addToCart}>
            Add to Cart
          </Button>
        </Grid>
      </Card.Content>
    </Card>
  );
};

export default MenuCard;
