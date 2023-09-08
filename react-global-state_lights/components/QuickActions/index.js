import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  lights,
  setAllLightsOn,
  setAllLightsOff,
}) {
  const isOnCount = lights.reduce(
    (onCount, light) => (light.isOn ? onCount + 1 : onCount),
    0
  );

  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={setAllLightsOff}
        disabled={isOnCount === 0}
      >
        Turn all lights off
      </Button>

      <Button
        type="button"
        onClick={setAllLightsOn}
        disabled={isOnCount === lights.length}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
