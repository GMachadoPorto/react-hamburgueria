import styled from "styled-components";

export const StyledLi = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: flex-start;

  figure {
    height: 100%;
    width: 80px;
    margin-right: 12px;
    background-color: var(--color-gray-1);

    img {
      width: 100%;
      height: 100%;
    }
  }

  .infoItem {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    p {
      color: var(--color-gray-3);
      font-weight: 700;
      font-size: 1.125rem;
    }

    & > div {
      width: 90%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  .quantidade {
    width: 100px;
    height: 36px;
    display: flex;
    align-items: center;
    background-color: var(--color-gray-1);

    button {
      width: 30%;
      height: 100%;
      font-size: 1.375rem;
      font-weight: 400;
      color: var(--color-secondary);
    }

    span {
      width: 40%;
      height: 90%;
      padding-top: 10px;
      background-color: #ffffff;
      text-align: center;
      font-size: 0.75rem;
      font-weight: 400;
      color: #000000;
    }
  }
`;
