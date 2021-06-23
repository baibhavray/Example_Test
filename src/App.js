import React from "react";
import { Grid } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { IconButton } from '@material-ui/core';


export default class App extends React.Component {
  

  state = {
     students : [
      {id:"1",name:"Baibhav",branch:"Cse"},
      {id:"2",name:"Akash",branch:"ECE"},
      {id:"3",name:"Abhinab",branch:"EEE"},
      {id:"4",name:"Ashish",branch:"Cse"},
      {id:"5",name:"Aman",branch:"Cse"},
      {id:"6",name:"Ashray",branch:"ETC"},
      {id:"7",name:"Abhi",branch:"IT"},
      {id:"8",name:"Sam",branch:"Cse"},
      {id:"9",name:"Ram",branch:"EE"},
      {id:"10",name:"Ron",branch:"CE"}
    ]
  }


  render(){

    
    return(
      // <div style={{margin: "10px 110px 10px 100px"}}>
        <Grid  item lg={5} spacing={10} justify="center">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell  align="center"></TableCell>
              <TableCell  align="center">Name</TableCell>
              <TableCell align="center">Branch</TableCell>
              <TableCell  align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.students.map((single, i) => (
              
              <TableRow key={single.id}>
                <TableCell>
                  <IconButton onClick={() => {
                    var arr = this.state.students;
                    var arr2 = arr[i]
                    var arr3 = arr[i-1]
                    arr[i] = arr3
                    arr[i-1] = arr2
                    this.setState({students : arr})
                  }}>
                    <ArrowUpwardIcon/>
                  </IconButton>
                </TableCell>
                <TableCell align="center">{single.name}</TableCell>
                <TableCell align="center">{single.branch}</TableCell>
                <TableCell>
                  <IconButton>
                    <ArrowDownwardIcon/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Grid>
        
      // </div>
    )
  }
}