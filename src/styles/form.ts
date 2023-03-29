import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 20px;
  border-radius: 4px;
  border: 2px solid var(--color-gray-0);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      width: max-content;
      font-size: 1.125rem;
      font-weight: 700;
      color: var(--color-gray-3);
    }

    a {
      width: max-content;
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--color-gray-2);

      &:hover {
        color: var(--color-gray-3);
      }
    }
  }

  button {
    height: 60px;
    width: 100%;
    padding: 0 20px;
    border-radius: 8px;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 600;
  }

  .login {
    border: 2px solid var(--color-primary);
    background-color: var(--color-primary);

    &:hover {
      border: 2px solid var(--color-primary-50);
      background-color: var(--color-primary-50);
    }
  }

  .register {
    border: 2px solid var(--color-gray-2);
    background-color: var(--color-gray-2);

    &:hover {
      border: 2px solid var(--color-primary);
      background-color: var(--color-primary);
    }
  }

  span {
    width: 75%;
    height: max-content;
    white-space: pre-wrap;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--color-gray-2);
  }

  .fakeButton {
    text-decoration: none;
    text-align: center;
    height: 60px;
    width: 100%;
    padding: 16px;
    border-radius: 8px;
    border: 2px solid var(--color-gray-1);
    background-color: var(--color-gray-1);
    color: var(--color-gray-2);
    font-size: 1rem;
    font-weight: 600;

    &:hover {
      border: 2px solid var(--color-gray-2);
      background-color: var(--color-gray-2);
      color: var(--color-gray-0);
    }
  }
`;
