import styled from "styled-components";

export const StyledInput = styled.div`
  height: max-content;
  width: 100%;
  max-width: 650px;
  padding: 0 12px;
  position: fixed;
  top: 20px;
  left: 0;
  z-index: 1;

  @media (min-width: 650px) {
    & {
      top: 0;
      width: 360px;
      position: relative;
    }
  }

  input {
    height: 60px;
    width: 100%;
    padding: 0 120px 0 10px;
    border-radius: 8px;
    border: 2px solid var(--color-gray-1);
    background-color: #ffffff;
    font-size: 1rem;
    font-weight: 600;

    &::placeholder {
      color: var(--color-gray-1);
    }

    &:focus {
      border: 2px solid var(--color-gray-3);
      color: var(--color-gray-2);
    }
  }

  button {
    height: 40px;
    width: max-content;
    padding: 0 20px;
    border-radius: 8px;
    border: 2px solid var(--color-primary);
    position: absolute;
    top: 10px;
    right: 22px;
    background-color: var(--color-primary);
    color: #ffffff;
  }
`;
