import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

const Styles = makeStyles((theme) => ({
  main: {
    display: 'flex',       
    alignItems: 'center',       
    justifyContent: 'center',       
    height: '100vh'
  },
  root: {
    width: '65%',
    margin: '0 auto'
  },
  left: {
    float: 'left',
    display: 'flex',       
    flexDirection: 'column'
  },
  right: {
      float: 'right',
      display: 'flex',       
      flexDirection: 'column'
  },
  btn: {
    marginBottom: 10,       
    marginTop: 10
  }

}));



export default function Result(props) {
  
  
  const submitHandle = (e) => {
    e.preventDefault();
    //const [name, setName] = useState('');
    //setName(props.name.value)

  }

  const classes = Styles();
  return (
    <div className='main'>
      <Card className={classes.root}>
      <div className={classes.left}>
      <Button className={classes.btn} variant="contained" color="secondary">
        Reset
      </Button>
      <Button onClick={submitHandle} className={classes.btn} variant="contained" color="secondary">
        Submit
      </Button>
      </div>
      <div className={classes.right}>
      <Button className={classes.btn} variant="contained" color="secondary">
        Default
      </Button>
      <Button className={classes.btn} variant="contained" color="secondary">
        Clear
      </Button>
      </div>
      </Card>
      <div></div>
    </div>
  );
}
