import { StyledDiv } from "./style";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function TotalCard() {
  const { currentSale, cleanCart } = useContext(CartContext);

  let valueTotal;

  if (currentSale.length > 0) {
    valueTotal = currentSale
      .map((element) => element.price * element.qtd)
      .reduce((a, b) => a + b, 0);
  } else {
    valueTotal = 0;
  }

  return (
    <StyledDiv>
      <div className="info">
        <p>Total</p>
        <p>R$ {valueTotal.toFixed(2).replace(".", ",")}</p>
      </div>

      <button onClick={cleanCart}>Remover todos</button>
    </StyledDiv>
  );
}

export default TotalCard;
