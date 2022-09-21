import React from "react";
import { createUseStyles } from "react-jss";
import OfficeSchema from "./OfficeSchema";

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <div className={classes.container}>
        <OfficeSchema />
      </div>
    </div>
  );
};

export default App;

const useStyles = createUseStyles({
  app: {
    background: "black",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "500px",
    height: "500px",
    background: "white",
    padding: "8px",
  },
});
