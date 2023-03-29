import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 80px 20px 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #00000040;

  .modalBody {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }

  .title {
    width: 100%;
    padding: 12px 20px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary);

    h3 {
      color: #ffffff;
      font-weight: 700;
      font-size: 1.125rem;
    }

    button {
      height: max-content;
      width: max-content;
      color: #ffffff50;
      font-weight: 500;
      font-size: 0.75rem;

      &:hover {
        color: #ffffff;
      }
    }
  }

  .noItem {
    width: 100%;
    height: 150px;
    display: flex;
    border: 1px solid var(--color-gray-0);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;

    h3 {
      color: var(--color-gray-3);
      font-weight: 700;
      font-size: 1.125rem;
      text-align: center;
    }

    span {
      color: var(--color-gray-2);
      font-weight: 400;
      font-size: 0.875rem;
      text-align: center;
    }
  }

  .haveItem {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--color-gray-0);

    ul {
      overflow-y: auto;
      width: 100%;
      max-height: 300px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
`;
