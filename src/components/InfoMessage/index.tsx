import { StyledDiv } from "./style";
import { StyledBag } from "../../styles/icons";

function InfoMessage() {
  return (
    <StyledDiv>
      <div>
        <StyledBag />
      </div>
      <p>
        A vida é como um sanduíche, é preciso recheá-la com os
        <span> melhores</span> ingredientes.
      </p>
    </StyledDiv>
  );
}

export default InfoMessage;
