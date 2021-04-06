/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const HEIGHTS = {
  small: "8px",
  medium: "12px",
  large: "24px",
};

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      size={size}
      style={{ "--height": HEIGHTS[size] }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <BarWrapper>
        <CompletedPortion value={value}>
          <VisuallyHidden>{value} %</VisuallyHidden>
        </CompletedPortion>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: var(--height);
  border-radius: ${(p) => (p.size === "large" ? "8" : "4")}px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  ${(p) => p.size === "large" && "padding: 4px;"}
`;

const BarWrapper = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  /* Trim off corners when progress bar is near full */
  overflow: hidden;
`;

const CompletedPortion = styled.div`
  width: ${(p) => p.value}%;
  height: 100%;
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
