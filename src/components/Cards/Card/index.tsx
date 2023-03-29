import { StyledItem } from "./style";

import { CartContext, iProductsElement } from "../../../context/CartContext";
import { useContext } from "react";

interface iDataItem {
  data: iProductsElement;
}

function Card({ data }: iDataItem) {
  const { addItem } = useContext(CartContext);

  return (
    <StyledItem>
      <figure>
        <img src={data.img} alt={data.name} />
      </figure>
      <div>
        <h3>{data.name}</h3>
        <span>{data.category}</span>
        <p>R$ {data.price.toFixed(2).replace(".", ",")}</p>
        <button type="button" onClick={() => addItem(data)}>
          Adicionar
        </button>
      </div>
    </StyledItem>
  );
}

export default Card;
