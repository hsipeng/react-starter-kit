import React from "react";
import Routers from "~/router";
const Style = require("../assets/style/index.css");

export default () => {
  return (
    <main className={Style.main}>
      <Routers />
    </main>
  );
};
