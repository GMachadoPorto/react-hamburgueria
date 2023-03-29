import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;

  .search {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    h2 {
      width: 100%;
      font-weight: 700;
      font-size: 1.625rem;
      color: var(--color-gray-3);
      white-space: pre-wrap;
    }

    h2 span {
      font-weight: 700;
      font-size: 1.625rem;
      color: var(--color-gray-2);
    }

    button {
      width: 100%;
      height: 40px;
      padding: 0 8px;
      border-radius: 8px;
      font-weight: 500;
      font-size: 0.875rem;
      color: #ffffff;
      background-color: var(--color-primary);
    }
  }

  @media (min-width: 600px) {
    .search {
      flex-direction: row;
      gap: 0;
    }

    .search h2 {
      width: 80%;
    }

    .search button {
      width: max-content;
    }
  }

  .error {
    font-size: 2rem;
    color: red;
    text-align: center;
  }
`;
