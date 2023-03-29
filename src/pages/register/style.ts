import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: 700px) {
    & {
      height: 100vh;
    }
  }

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;

    @media (min-width: 700px) {
      & {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 60px;
      }
    }
  }

  .info {
    height: max-content;
    width: 100%;
    max-width: 360px;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    figure {
      width: 240px;
      height: 60px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .bubbles {
      width: max-content;
    }
  }
`;
