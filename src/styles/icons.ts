import styled from "styled-components";
import { FiShoppingBag } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { BiArrowFromLeft } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";

export const StyledBag = styled(FiShoppingBag)`
  width: 20px;
  height: 20px;
`;

export const StyledCart = styled(FaShoppingCart)`
  width: 100%;
  height: 100%;
  color: var(--color-gray-2);
`;

export const StyledArrow = styled(BiArrowFromLeft)`
  width: 100%;
  height: 100%;
  color: var(--color-gray-2);
`;

export const StyledLupe = styled(BiSearch)`
  width: 100%;
  height: 100%;
  color: var(--color-gray-2);
`;
