import styled from "styled-components";

interface iProps {
  border: string;
}

export const StyledInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 0 15px;
  border-radius: 8px;
  border: 2px solid ${(props: iProps) => props.border};
  background-color: var(--color-gray-0);

  &::placeholder {
    color: var(--color-gray-2);
  }

  &:focus {
    border: 2px solid var(--color-gray-3);
    background-color: #ffffff;
  }
`;
