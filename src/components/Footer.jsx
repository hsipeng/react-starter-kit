import React from "react";
import styled, { css } from "styled-components";
import _ from "lodash";
import Clock from "./clock";
const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props =>
    props.primary &&
    css`
      background: white;
      color: palevioletred;
    `};
`;

export default () => {
  return (
    <footer>
      <span>
        &copy;copyright.&nbsp;&nbsp;
        <Clock />
      </span>
      <Button
        href="https://github.com/styled-components/styled-components"
        target="_blank"
        rel="styled-components"
        primary
      >
        styled-components
      </Button>
      <label>{_.each(["1", "2", "3"]).join(",")}</label>
    </footer>
  );
};
