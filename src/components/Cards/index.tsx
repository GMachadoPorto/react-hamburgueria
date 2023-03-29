import { StyledList } from "./style";
import Card from "./Card";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Cards() {
  const { products, filteredProducts, haveSearch } = useContext(CartContext);

  return (
    <StyledList>
      {haveSearch
        ? filteredProducts.map((element, index) => (
            <Card key={index} data={element}></Card>
          ))
        : products.map((element, index) => (
            <Card key={index} data={element}></Card>
          ))}
    </StyledList>
  );
}

export default Cards;
