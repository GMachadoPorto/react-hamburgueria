import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: 120px;
  border-top: 2px solid var(--color-gray-1);
  padding: 20px;
  margin-bottom: 20px;

  .info {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;

    p {
      width: max-content;
      font-weight: 600;
      font-size: 0.875rem;
      color: var(--color-gray-3);
    }

    p:nth-child(2) {
      color: var(--color-gray-2);
    }
  }

  button {
    width: 100%;
    height: 60px;
    padding: 0 20px;
    border-radius: 8px;
    border: 1px solid var(--color-gray-1);
    color: var(--color-gray-100);
    background-color: var(--color-gray-1);
    font-size: 1rem;
    font-weight: 600;

    &:hover {
      border: 1px solid var(--color-gray-2);
      color: var(--color-gray-0);
      background-color: var(--color-gray-2);
    }
  }
`;
