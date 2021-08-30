import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import TriviaListJson from "./answers.json";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import ClearIcon from '@material-ui/icons/Clear';
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TitleImg from "./img/logo.png";
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
    backgroundColor: "rgba(255,255,255,0.3)",
    color: "#a6acdc",
    margin: "20px 0px 0px 0px",
    padding: "15px",
    width: "100%",
    borderRadius: "10px",
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
});

function TriviaList() {
  // const triviaObj = TriviaListJson
  const imgNums = [
    100, 102, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1274, 1277, 1278,
    1279, 1280, 1281, 1282, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291,
    1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1301, 1302, 1309, 1310,
    1311, 1312, 1313, 1314, 1315, 1316, 1328, 1329, 1330, 1332, 1333, 143, 163,
    176, 177, 187, 189, 212, 217, 35, 351, 796, 814, 815, 816, 817, 818, 819,
    820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 833, 834, 835,
    836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850,
    851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865,
    866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880,
    881, 882, 883, 884, 885, 886, 97, 98,
  ];
  const [triviaObj, setTriviaObj] = useState(TriviaListJson["QuestionList"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermLength, setSearchTermLength] = useState(0);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const classes = useStyles();
  // useEffect(() => {
  //   if (searchTerm.length > 0) {
  //     const results = triviaObj.filter((man) =>
  //       man.Question.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     let debouncer = setTimeout(() => {
  //       setSearchTermLength(results.length);
  //       setFilteredQuestions(results.slice(0, 20));
  //     }, 2000);
  //   }
  // }, [searchTerm]);
  useEffect(() => {
    // let debouncer = setTimeout(() => {
    //   const results = triviaObj.filter((man) =>
    //     man.Question.toLowerCase().includes(searchTerm.toLowerCase())
    //   );
    //   setSearchTermLength(results.length);
    //   setFilteredQuestions(results.slice(0, 20));
    // }, 500);
    const results = triviaObj.filter((man) =>
      man.Question.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchTermLength(results.length);
    setFilteredQuestions(results.slice(0, 20));
  }, [searchTerm]);
  const clearSearch = () => {
    setSearchTerm('');
  }
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const nextPokemons = (id) => {
    return `./img/${id}.png`;
  };

  return (
    <Container>
      <h1 className={classes.titlePage}>
        {/* <img src={TitleImg} alt="WWE CHAMPIONS" /> */}
        WWE TRIVIA RUMBLE
      </h1>
      <form noValidate autoComplete="off">
        {/* <label className={classes.label}>Type Question Here</label>
        <input
          className={classes.input}
          id="standard-basic"
          label="Type Question Here"
          value={searchTerm}
          onChange={handleChange}
        />
        <Button variant="outlined">X</Button> */}
        <InputLabel className={classes.label} htmlFor="input-with-icon-adornment">
          Type Question Here
        </InputLabel>
        <Input
          className={classes.input}
          id="standard-basic"
          label="Type Question Here"
          value={searchTerm}
          onChange={handleChange}
          startAdornment={
            <InputAdornment position="start" >
              <ClearIcon onClick={clearSearch}/>
            </InputAdornment>
          }
        />
      </form>
      {searchTermLength.length > 20 ? (
        <p className={classes.searchTermLength}>
          This search contain {searchTermLength} registers, please specify more
        </p>
      ) : (
        <p className={classes.searchTermLength}>
          {searchTermLength} registers found
        </p>
      )}
      <div className="pokemon-list">
        <Grid container spacing={3}>
          {filteredQuestions.map((questionn) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              {/* <h4>{questionn.Question}</h4>
              <div
                style={{
                  height: "100px",
                  width: "100px",
                  backgroundImage: `url(./img/${questionn.Id}.png)`,
                }}
              ></div>
              <p>{questionn.Answer}</p> */}

              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Q: {questionn.Question}
                  </Typography>
                  <div
                    style={{
                      height: imgNums.find((idd) => idd == questionn.Id)
                        ? "100px"
                        : "0",
                      width: "100px",
                      backgroundImage: `url(./img/${questionn.Id}.png)`,
                    }}
                  ></div>

                  <Typography
                    variant="body2"
                    className={classes.answer}
                    component="p"
                  >
                    A: {questionn.Answer}
                  </Typography>
                </CardContent>
                {/* <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions> */}
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}

export default TriviaList;
