import styled from "styled-components";

export const StyledItem = styled.li`
  min-width: 150px;
  max-width: 200px;
  width: 100%;
  height: 344px;
  margin: 0 auto;
  border: 1px solid var(--color-gray-1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  :hover {
    transform: scale(1.1);
    border: 1px solid var(--color-primary);
  }

  @media (min-width: 600px) {
    width: 200px;
  }

  figure {
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    background-color: var(--color-gray-0);
    border-radius: 5px;
  }

  img {
    height: 100%;
    width: 100%;
  }

  > div {
    height: 60%;
    width: 100%;
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--color-gray-3);
  }

  span {
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--color-gray-2);
  }

  p {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-primary);
  }

  button {
    height: 40px;
    width: max-content;
    padding: 0 20px;
    border-radius: 8px;
    border: 2px solid var(--color-gray-2);
    background-color: var(--color-gray-2);
    color: #ffffff;
    font-size: 0.875rem;
    font-weight: 600;

    &:hover {
      border: 2px solid var(--color-primary);
      background-color: var(--color-primary);
    }
  }
`;
