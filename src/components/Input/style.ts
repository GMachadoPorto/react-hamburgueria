import styled from "styled-components";

export const StyledField = styled.fieldset`
  width: 100%;
  height: max-content;
  margin-bottom: 26px;
  border: none;
  position: relative;

  label {
    padding: 4px;
    position: absolute;
    top: -12px;
    left: 16px;
    background-color: #ffffff;
    color: var(--color-grey-2);
    animation-name: show;
    animation-fill-mode: forwards;
    animation-duration: 0.3s;
    animation-timing-function: ease;

    @keyframes show {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  span {
    margin-left: 12px;
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--color-negative);
  }
`;
