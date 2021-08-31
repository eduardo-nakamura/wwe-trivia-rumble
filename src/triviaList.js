import React, { useState, useEffect } from "react";

import TriviaListJson from "./answers.json";
import MenuItem from "@material-ui/core/MenuItem";
// table
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// table
import Select from "@material-ui/core/Select";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import ClearIcon from "@material-ui/icons/Clear";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// columnsStart

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

// columnsEnd
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
  const [maxNum, setMaxNum] = useState(10);
  const [triviaObj, setTriviaObj] = useState(TriviaListJson["QuestionList"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermLength, setSearchTermLength] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const results = triviaObj.filter((man) =>
      man.Question.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchTermLength(results.length);
    setQuestions(results);
    setFilteredQuestions(results.slice(0, maxNum));
  }, [searchTerm]);

  const clearSearch = () => {
    setSearchTerm("");
  };

  const maxNumSelect = (event) => {
    setMaxNum(event.target.value);
    setFilteredQuestions(questions.slice(0, event.target.value));
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Container>
      <h1 className={classes.titlePage}>WWE TRIVIA RUMBLE</h1>
      <form noValidate autoComplete="off">
        <InputLabel
          className={classes.label}
          htmlFor="input-with-icon-adornment"
        >
          Type Question Here
        </InputLabel>
        {/* <button onClick={changeMaxNum20}>20</button> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={maxNum}
          onChange={maxNumSelect}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        {/* <button onClick={changeMaxNum30}>30</button> */}
        <Input
          className={classes.input}
          id="standard-basic"
          label="Type Question Here"
          value={searchTerm}
          onChange={handleChange}
          startAdornment={
            <InputAdornment position="start">
              <ClearIcon onClick={clearSearch} />
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
        <TableContainer >
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow  style={{ borderBottom: '3px #e2e4f5 solid' }}>
                <TableCell><h3 className={classes.tableHead}>Question</h3> </TableCell>
                <TableCell align="left"><h3 className={classes.tableHead}>Answer</h3></TableCell>
                <TableCell align="left"><h3 className={classes.tableHead}>Image</h3></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredQuestions.map((row) => (
                <TableRow key={row.Id}  style={{ borderBottom: '3px #e2e4f5 solid' }}>
                  <TableCell style={{ border: 0 }} component="th" scope="row">
                    <p className={classes.tableBody}>{row.Question}</p>                    
                  </TableCell>
                  <TableCell style={{ border: 0 }} align="left">            
                    <p style={{ fontSize: '18px' }} className={classes.tableBody}>{row.Answer}</p>
                  </TableCell>
                  <TableCell style={{ border: 0 }} align="left">
                    <div
                      key={"img-" + row.Id}
                      style={{
                        height: "30px",
                        width: "30px",
                        backgroundImage: `url(./img/${row.Id}.png)`,
                      }}
                    ></div>
                  </TableCell>
                  {/* <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <Grid container spacing={3}>
          {filteredQuestions.map((questionn) => (
            <Grid
              key={"grid-" + questionn.Id}
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
            >
              <Card
                key={"card-" + questionn.Id}
                className={classes.root}
                variant="outlined"
              >
                <CardContent key={"card-content-" + questionn.Id}>
                  <Typography
                    key={"title-" + questionn.Id}
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Q: {questionn.Question}
                  </Typography>
                  <div
                    key={"img-" + questionn.Id}
                    style={{
                      height: imgNums.find((idd) => idd == questionn.Id)
                        ? "100px"
                        : "0",
                      width: "100px",
                      backgroundImage: `url(./img/${questionn.Id}.png)`,
                    }}
                  ></div>

                  <Typography
                    key={"answer-" + questionn.Id}
                    variant="body2"
                    className={classes.answer}
                    component="p"
                  >
                    A: {questionn.Answer}
                  </Typography>
                </CardContent>
                
              </Card>
            </Grid>
          ))}
        </Grid> */}
      </div>
    </Container>
  );
}

export default TriviaList;
