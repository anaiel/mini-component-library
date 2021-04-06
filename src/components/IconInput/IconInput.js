import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  "small": {
    icon: 12,
    font: 0.875,
    iconRightMargin: 8
  },
  "large": {
    icon: 16,
    font: 1.125,
    iconRightMargin: 14
  }
}

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper>
      <VisuallyHidden>
        <label for={label}>{label}</label>
      </VisuallyHidden>
      <Input
        type="text"
        id={label}
        placeholder={placeholder}
        style={{
          "--width": width + "px",
          "--padding-left": `${SIZES[size].icon + SIZES[size].iconRightMargin}px`,
          "--font-size": `${SIZES[size].font}rem`
        }}
      />
      <Icon
        id={icon}
        size={SIZES[size].icon}
        strokeWidth={1}
        style={{
          position: "absolute",
          top: `calc(50% - ${SIZES[size].icon / 2 + 1}px)`,
          left: 0,
          pointerEvents: "none"
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  width: var(--width);
  border: none;
  border-bottom: 1px solid;
  outline-offset: 2px;
  padding-left: var(--padding-left);
  font-weight: 700;
  font-size: var(--font-size);

  &::placeholder {
    font-weight: 500;
    color: ${COLORS.gray500}
  }
`;

export default IconInput;
