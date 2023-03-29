import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: 96px;
  padding: 0 16px;
  border-radius: 4px;
  border: 1px solid var(--color-gray-1);
  display: flex;
  align-items: center;
  gap: 20px;

  div {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary-50);
    color: var(--color-primary);
  }

  p {
    height: max-content;
    white-space: pre-wrap;
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--color-gray-2);

    span {
      color: var(--color-gray-3);
    }
  }
`;
