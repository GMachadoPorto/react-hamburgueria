import CartCard from "./Cart-Card";
import { StyledDiv } from "./style";
import TotalCard from "../TotalCart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Cart() {
  const { currentSale, changeModalStatus } = useContext(CartContext);
  return (
    <StyledDiv>
      <div className="modalBody">
        <div className="title">
          <h3>Carrinho de compras</h3>
          <button type="button" onClick={changeModalStatus}>
            X
          </button>
        </div>

        {currentSale.length === 0 ? (
          <div className="noItem">
            <h3>Sua sacola está vazia</h3>
            <span>Adicione itens</span>
          </div>
        ) : (
          <div className="haveItem">
            <ul>
              {currentSale.map((element) => (
                <CartCard key={element.id} item={element} />
              ))}
            </ul>
            <TotalCard />
          </div>
        )}
      </div>
    </StyledDiv>
  );
}

export default Cart;
