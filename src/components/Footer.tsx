import React from "react";
import styled, { css } from "styled-components";
import _ from "lodash";
import Clock from "~/components/clock";
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
      >
        styled-components
      </Button>
      <label>{_.each(["1", "2", "3"]).join(",")}</label>
    </footer>
  );
};
