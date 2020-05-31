import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Result from "./result";
import { SurNameInputContext, NameInputContext } from "./context";

const Styles = makeStyles((theme) => ({
  left: {
    float: "left",
  },
  right: {
    float: "right",
  },
  txt: {
    margin: 18,
  },
}));

export default function AddToInput() {
  const name = useInputChange("");
  const surName = useInputChange("");
  const classes = Styles();
  return (
    <NameInputContext.Consumer>
      {(nameInputContext) => (
        <SurNameInputContext.Consumer>
          {(surNameInputContext) => (
            <div>
              <div className={classes.left}>
                <TextField
                  className={classes.txt}
                  value={nameInputContext.value}
                  onChange={(e)=>nameInputContext.onValueChange(e.target.value)}
                  id="standard-basic"
                  label="Name"
                />
                <br />
                <TextField
                  className={classes.txt}
                  value={surNameInputContext.value}
                  onChange={(e)=>surNameInputContext.onValueChange(e.target.value)}
                  id="standard-basic"
                  label="Surname"
                />
              </div>
              <div className={classes.right}>
                <TextField
                  className={classes.txt}
                  value={nameInputContext.value}
                  onChange={(e)=>nameInputContext.onValueChange(e.target.value)}
                  id="standard-basic"
                  label="Name"
                />
                <br />
                <TextField
                  className={classes.txt}
                  value={surNameInputContext.value}
                  onChange={(e)=>surNameInputContext.onValueChange(e.target.value)}
                  id="standard-basic"
                  label="Surname"
                />
              </div>
              <Result name={name} surname={surName} />
            </div>
          )}
        </SurNameInputContext.Consumer>
      )}
    </NameInputContext.Consumer>
  );
}

const useInputChange = () => {
  const [value, setValue] = useState([]);
  const handleChange = (e) => {
    setValue([...value, e.target.value]);
  };
  return {
    value,
    onChange: handleChange,
  };
};
