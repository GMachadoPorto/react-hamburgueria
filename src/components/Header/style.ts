import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  padding: 12px 0;
  background-color: var(--color-gray-0);

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 14px;
  }

  figure {
    cursor: pointer;
  }

  nav {
    width: max-content;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
  }

  .cartIcon {
    position: relative;

    span {
      text-align: center;
      height: max-content;
      width: max-content;
      padding: 2px 4px;
      border-radius: 8px;
      position: absolute;
      top: -12px;
      right: -8px;
      background-color: var(--color-primary);
      color: #ffffff;
      font-weight: 900;
      font-size: 0.875rem;
    }
  }

  .icon {
    width: 24px;
    height: 24px;
  }
`;
