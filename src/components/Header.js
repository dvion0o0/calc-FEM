import React from "react";
import styled from "styled-components";
import Screen from "./Screen";
import Keypad from "./Keypad";
function Header({ index, toggle, keyClick, value, reset, Delete, calculate }) {
  return (
    <Wrapper>
      <div className="header-center">
        <div className="title-container">
          <h2>calc</h2>
          <div className="theme-toggle-container">
            <h6>THEME</h6>
            <div className="toggle" onClick={toggle}>
              <span
                className={`${
                  index === 1
                    ? "circle two"
                    : index === 2
                    ? "circle three"
                    : "circle"
                }`}
              ></span>
              <div className="toggle-numbers">
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>
            </div>
          </div>
        </div>
        <Screen value={value} />
        <Keypad
          keyClick={keyClick}
          Delete={Delete}
          reset={reset}
          calculate={calculate}
        />
      </div>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
  min-height: 100vh;
  background: ${(props) => props.theme.mainBackground};
  padding: 3rem 0;

  @media screen and (min-width: 768px) {
    padding: 5rem 0;
  }

  .header-center {
    width: 90vw;
    margin: 0 auto;
    /* display: flex; */

    @media screen and (min-width: 768px) {
      width: 40vw;
      /* justify-content: center;
      align-items: center; */
    }

    .title-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      h2 {
        color: ${(props) => props.theme.screenText};
      }
      .theme-toggle-container {
        display: flex;
        align-items: center;
        h6 {
          font-size: 18px;
          color: ${(props) => props.theme.screenText};
        }
        .toggle {
          position: relative;
          width: 60px;
          height: 25px;
          flex: 0 0 50%;
          background: ${(props) => props.theme.keypadBackground};
          margin-left: 1rem;
          border-radius: 20px;
          cursor: pointer;
          .circle {
            position: absolute;
            width: 20px;
            height: 20px;
            background: ${(props) => props.theme.calculateKeyBackground};
            border-radius: 50%;
            top: 10%;
            left: 5%;
          }

          .two {
            left: 30%;
          }

          .three {
            left: 60%;
          }

          .toggle-numbers {
            position: absolute;
            top: -120%;
            display: flex;
            justify-content: space-between;
            span {
              font-size: 20px;
              flex: 0 0 33.33%;
              margin-left: 0.3rem;
              color: ${(props) => props.theme.screenText};
            }
          }
        }
      }
    }
  }
`;
