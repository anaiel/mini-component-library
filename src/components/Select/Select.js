import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <InvisibleSelect value={value} onChange={onChange}>
        {children}
      </InvisibleSelect>
      <DisplayedValueWrapper aria-hidden={true}>
        {displayedValue ?? children[0]}
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
      </DisplayedValueWrapper>
    </Wrapper>
  );
};

const DisplayedValueWrapper = styled.div`
  isolation: isolate;
  position: relative;
  background-color: ${COLORS.transparentGray15};
  color: inherit;
  border-radius: 8px;
  border: none;
  padding: 12px 62px 12px 16px;
  pointer-events: none;
`;

const InvisibleSelect = styled.select`
  appearance: none; /* Remove default arrow */
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  opacity: 0;
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
