import React, { useState } from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <Icon
        id="chevron-down"
        size="24"
        strokeWidth="2"
        style={{
          position: "absolute",
          top: "calc(50% - 12px)",
          right: "11px",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
    </Wrapper>
  );
};

const SelectWrapper = styled.select`
  appearance: none; /* Remove default arrow */
  background-color: ${COLORS.transparentGray15};
  color: inherit;
  border-radius: 8px;
  border: none;
  padding: 12px 62px 12px 16px;
`;

const Wrapper = styled.div`
  color: ${COLORS.gray700};
  position: relative;
  width: fit-content;

  &:hover {
    color: ${COLORS.black};
  }
`;

export default Select;
