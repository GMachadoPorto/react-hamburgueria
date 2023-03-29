import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

:root {
  --color-primary: #27ae60;
  --color-primary-50: #93d7af;
  --color-secondary: #EB5757;
  --color-gray-3: #333333;
  --color-gray-2: #828282;
  --color-gray-1: #e0e0e0;
  --color-gray-0: #f5f5f5;
  --color-negative:#E60000;
  --color-warning:#FFCD07; 
  --color-success:#168821;
  --color-information:#155BCB;
}

button {
  cursor: pointer;
  border: none;
  background-color: transparent;
}

ul {
  list-style: none;
}

ul::-webkit-scrollbar{
    height              : 8px;
    width: 100%;
    background-color    : transparent;
}

ul::-webkit-scrollbar-thumb{
    background-color    : var(--color-gray-2);
    border-radius       : 8px;
}

@media (min-width:600px){
  ul::-webkit-scrollbar{
    height: 100%;
    width: 8px;
    background-color: transparent;
  }
}

input {
  outline: none;
}

.container {
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 16px;
}

p, span, h2, h3{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
`;
