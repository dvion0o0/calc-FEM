import React from "react";
import styled from "styled-components";
function Keypad({ keyClick, reset, Delete, calculate }) {
  return (
    <KeypadWrapper>
      <KeypadButton name="7" onClick={(e) => keyClick(e)}>
        7
      </KeypadButton>
      <KeypadButton name="8" onClick={(e) => keyClick(e)}>
        8
      </KeypadButton>
      <KeypadButton name="9" onClick={(e) => keyClick(e)}>
        9
      </KeypadButton>
      <KeypadButton className="delete" onClick={Delete}>
        DEL
      </KeypadButton>
      <KeypadButton name="4" onClick={(e) => keyClick(e)}>
        4
      </KeypadButton>
      <KeypadButton name="5" onClick={(e) => keyClick(e)}>
        5
      </KeypadButton>
      <KeypadButton name="6" onClick={(e) => keyClick(e)}>
        6
      </KeypadButton>
      <KeypadButton name="+" onClick={(e) => keyClick(e)}>
        +
      </KeypadButton>
      <KeypadButton name="1" onClick={(e) => keyClick(e)}>
        1
      </KeypadButton>
      <KeypadButton name="2" onClick={(e) => keyClick(e)}>
        2
      </KeypadButton>
      <KeypadButton name="3" onClick={(e) => keyClick(e)}>
        3
      </KeypadButton>
      <KeypadButton name="-" onClick={(e) => keyClick(e)}>
        -
      </KeypadButton>
      <KeypadButton name="." onClick={(e) => keyClick(e)}>
        .
      </KeypadButton>
      <KeypadButton name="0" onClick={(e) => keyClick(e)}>
        0
      </KeypadButton>
      <KeypadButton name="/" onClick={(e) => keyClick(e)}>
        /
      </KeypadButton>
      <KeypadButton name="*" onClick={(e) => keyClick(e)}>
        X
      </KeypadButton>
      <KeypadButton className="reset" onClick={reset}>
        RESET
      </KeypadButton>
      <KeypadButton className="calculate" onClick={calculate}>
        =
      </KeypadButton>
    </KeypadWrapper>
  );
}

export default Keypad;

const KeypadWrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.keypadBackground};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  column-gap: 0.5rem;
  row-gap: 1rem;
  padding: 2rem 1.5rem;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    padding: 2rem 2rem;
    grid-template-columns: repeat(4, 2fr);
  }

  .reset {
    width: 95%;
    height: 70px;
    grid-column: 1 / span 2;
    background: ${(props) => props.theme.resetKeyBackground};
    box-shadow: 1px 3px 1px ${(props) => props.theme.resetKeyShadow};
    color: ${(props) => props.theme.screenText};
    @media screen and (min-width: 768px) {
      width: 85%;
    }
  }

  .calculate {
    width: 95%;
    height: 70px;
    grid-column: span 2 / span 4;
    background: ${(props) => props.theme.calculateKeyBackground};
    box-shadow: 1px 3px 1px ${(props) => props.theme.calculateKeyShadow};
    color: ${(props) => props.theme.screenText};
    @media screen and (min-width: 768px) {
      width: 85%;
    }
  }
  .delete {
    background: ${(props) => props.theme.resetKeyBackground};
    box-shadow: 1px 3px 1px ${(props) => props.theme.resetKeyShadow};
    color: ${(props) => props.theme.screenText};
  }
`;
const KeypadButton = styled.button`
  width: 65px;
  height: 65px;
  cursor: pointer;
  background: ${(props) => props.theme.mainKeyBackground};
  border: none;
  border-radius: 10px;
  box-shadow: 1px 3px 1px ${(props) => props.theme.mainKeyShadow};
  font-size: 24px;
  color: ${(props) => props.theme.keyText};
  font-weight: 700;

  @media screen and (min-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;
