import { useContext } from "react";
import logo from "../../assets/logo.svg";
import bubbles from "../../assets/bubbles.svg";
import FormRegister from "../../components/FormRegister";
import InfoMessage from "../../components/InfoMessage";
import { ResizeContext } from "../../context/ResizeContext";
import { StyledDiv } from "./style";

function RegisterPage() {
  const { isMobile } = useContext(ResizeContext);

  return (
    <StyledDiv>
      <div className="container">
        <div className="info">
          <figure>
            <img src={logo} alt="BurguerKenzie" />
          </figure>
          <InfoMessage />
          {!isMobile && (
            <figure className="bubbles">
              <img src={bubbles} alt="." />
            </figure>
          )}
        </div>
        <FormRegister />
      </div>
    </StyledDiv>
  );
}

export default RegisterPage;
