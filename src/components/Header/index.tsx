import Search from "../InputSearch";
import logo from "../../assets/logo.svg";
import { StyledHeader } from "./style";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { StyledCart } from "../../styles/icons";
import { StyledArrow } from "../../styles/icons";
import { StyledLupe } from "../../styles/icons";
import { ResizeContext } from "../../context/ResizeContext";
import { UserContext } from "../../context/UserContext";

function Header() {
  const { countCart, changeModalStatus } = useContext(CartContext);
  const { showSearch, changeSearch } = useContext(ResizeContext);
  const { logout } = useContext(UserContext);

  return (
    <StyledHeader>
      <div className="container">
        <figure onClick={() => window.location.reload()}>
          <img src={logo} alt="BurguerKenzie" />
        </figure>

        <nav>
          {showSearch ? (
            <Search />
          ) : (
            <button className="icon" onClick={changeSearch}>
              <StyledLupe />
            </button>
          )}

          <div className="cartIcon">
            <button className="icon" onClick={changeModalStatus}>
              <StyledCart />
            </button>
            <span>{countCart}</span>
          </div>

          <button className="icon" onClick={logout}>
            <StyledArrow />
          </button>
        </nav>
      </div>
    </StyledHeader>
  );
}

export default Header;
