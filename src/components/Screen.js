import React from "react";
import styled from "styled-components";
function Screen({ value }) {
  return (
    <ScreenWrapper>
      <h1>{value.toLocaleString()}</h1>
    </ScreenWrapper>
  );
}

export default Screen;

const ScreenWrapper = styled.div`
  background: ${(props) => props.theme.screenBackground};
  margin: 2rem 0;
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: end;
  height: 6rem;
  border-radius: 10px;

  h1 {
    color: ${(props) => props.theme.screenText};
    font-size: 42px;
    pointer-events: none;
  }
`;
