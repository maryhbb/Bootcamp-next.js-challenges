import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import StyledBox from "@/components/BoxWithStyledComponents/BoxWithStyledComponents.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents/BoxWithStyledComponents.js";
import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
`;

export default function HomePage() {
  return (
    <FlexBox>
      <BoxWithClassName />
      <BoxWithClassName isBlack />

      <StyledBox />
      <StyledBox $isBlack />
    </FlexBox>
  );
}
