import { createUseStyles } from "react-jss";
import React from "react";
import "./App.css";
import Alert from "../Alert/Alert";
import CartSuccess from "../CartSucces/CartSucces";

const useStyles = createUseStyles({
  wrapper: {
    padding: 20,
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Alert title="Items Not Added" type="error">
        <div>Your items are out of stock.</div>
      </Alert>
      <CartSuccess />
    </div>
  );
};

export default App;
