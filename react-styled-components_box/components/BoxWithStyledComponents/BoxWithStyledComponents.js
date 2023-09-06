import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.$isBlack ? "black" : "green")};
  margin: 2rem;

  &:hover {
    background-color: red;
  }
`;

const BoxWithStyledComponents = ({ $isBlack }) => {
  return <StyledBox $isBlack={$isBlack}></StyledBox>;
};

export default BoxWithStyledComponents;

