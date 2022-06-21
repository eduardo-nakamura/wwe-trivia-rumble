import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#212541",
    borderRadius: "15px",
  },
  titlePage: {
    padding: "15px",
    textAlign: "center",
    color: "#b4bae9",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "#a6acdc",
    margin: "20px 0px 0px 0px",
    padding: "15px",
    width: "100%",
    outline: "none",
    border: 0,
  },
  label: {
    fontSize: 14,
    color: "#e2e4f5",
    padding: "10px",
  },
  title: {
    fontSize: 14,
    color: "#b4bae9",
  },
  pos: {
    marginBottom: 15,
  },
  answer: {
    fontSize: 18,
    color: "#12eeb1",
    paddingTop: "10px",
  },
  searchTermLength: {
    color: "#e2e4f5",
    padding: "10px",
  },
  table: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: '7px'
  },
  tableHead: {
    color: "#e2e4f5",
    padding: "10px 0px 10px 0px",
  },
  tableBody: {
    color: "#e2e4f5",
  },
});

function TriviaNew() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [teste, setTeste] = useState('');
  const classes = useStyles();

  const changeHandler = (e) => {
    console.log(e.target.name, e.target.value)
    setTeste(e.target.value)
    // setSearchTerm(e.target.value);
    //this.setState({[e.target.name] : e.target.value})
  };

  return (
    <Container>
      <h1 className={classes.titlePage}>New</h1>
      <form noValidate autoComplete="off">
      <Box width={1} display="flex" flexDirection="row" justifyContent="center">        
        <Box p={1} bgcolor="grey.300">
          <TextField id="standard-basic" label="Question" name="name" value={question} onChange={changeHandler} />
        </Box>
        <Box p={1} bgcolor="grey.300">
          <TextField id="standard-basic" label="Answer" name="name" value={answer} onChange={changeHandler} />
        </Box>
        <Box p={1} bgcolor="grey.300">
          <TextField id="standard-basic" label="Standard" />
        </Box>
        <Box p={1} bgcolor="grey.300">
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </Box>
      </Box>
      </form>
      {teste}
    </Container>
  );
}

export default TriviaNew;
