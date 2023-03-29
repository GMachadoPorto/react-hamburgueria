import { StyledLi } from "./style";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { iProductsElement } from "../../../context/CartContext";

interface iCartCard {
  item: iProductsElement;
}

function CartCard({ item }: iCartCard) {
  const { removeItem, addItem, deleteItem } = useContext(CartContext);

  return (
    <StyledLi>
      <figure>
        <img src={item.img} alt={item.name} />
      </figure>
      <div className="infoItem">
        <div>
          <p>{item.name}</p>

          <div className="quantidade">
            <button onClick={() => removeItem(item.id)}>-</button>
            <span>{item.qtd}</span>
            <button onClick={() => addItem(item)}>+</button>
          </div>
        </div>

        <button onClick={() => deleteItem(item.id)}>Remover</button>
      </div>
    </StyledLi>
  );
}

export default CartCard;
