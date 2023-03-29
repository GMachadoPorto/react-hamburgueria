import { StyledInput } from "./style";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { ResizeContext } from "../../context/ResizeContext";

interface iEvent {
  key: string;
}

function Search() {
  const [teste, setTeste] = useState("");
  const { newItens } = useContext(CartContext);
  const { isMobile, changeSearch } = useContext(ResizeContext);

  function handleKey(event: iEvent) {
    if (event.key === "Enter") {
      search();
    }
  }

  function search() {
    newItens(teste);
    changeSearch();
  }

  function verifySearch() {
    if (teste === "") {
      changeSearch();
    }
  }

  return (
    <StyledInput>
      <input
        placeholder="Digitar Pesquisa"
        onChange={(event) => {
          setTeste(event.target.value);
        }}
        autoFocus={isMobile}
        onKeyPress={handleKey}
        onBlur={verifySearch}
      />
      <button onClick={search}>Pesquisar</button>
    </StyledInput>
  );
}

export default Search;
