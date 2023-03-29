import FormLogin from "../../components/FormLogin";
import logo from "../../assets/logo.svg";
import bubbles from "../../assets/bubbles.svg";
import InfoMessage from "../../components/InfoMessage";
import { StyledDiv } from "./style";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ResizeContext } from "../../context/ResizeContext";

function LoginPage() {
  const [loading, setLoading] = useState(true);
  const { isMobile } = useContext(ResizeContext);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@hambToken");
    const id = localStorage.getItem("@hambUserId");

    if (token && id) {
      navigate("/home", { replace: true });
    }

    setLoading(false);
  }, []);

  if (loading) {
    return null;
  }

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
        <FormLogin />
      </div>
    </StyledDiv>
  );
}

export default LoginPage;
