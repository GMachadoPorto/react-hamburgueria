import Cards from "../../components/Cards";
import Header from "../../components/Header";
import { CartContext } from "../../context/CartContext";
import { StyledMain } from "./style";
import { useContext } from "react";
import Cart from "../../components/Cart";

function HomePage() {
  const { search, modalStatus, haveSearch, clearSearch } =
    useContext(CartContext);

  return (
    <>
      <Header />
      <StyledMain>
        <div className="container">
          {haveSearch && (
            <section className="search">
              <h2>
                Resulado da busca por: <span>{search}</span>
              </h2>
              <button onClick={clearSearch}> Limpar busca</button>
            </section>
          )}
          <Cards />
        </div>
      </StyledMain>
      {modalStatus && <Cart />}
    </>
  );
}

export default HomePage;
