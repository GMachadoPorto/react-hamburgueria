import styled from "styled-components";

export const StyledList = styled.ul`
  width: 100%;
  padding: 20px 0;
  margin: 0 auto;
  display: flex;
  gap: 10px;
  overflow: auto;

  @media (min-width: 660px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    overflow-y: auto;
  }

  @media (min-width: 870px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1080px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
