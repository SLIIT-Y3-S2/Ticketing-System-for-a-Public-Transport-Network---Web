import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";
import axios from 'axios';

const BusView = () => {
  const [buses, setBus] = useState([]);

    useEffect(() => {
        const getBuses = () => {
          axios
            .get("http://localhost:5000/bus")
            .then((res) => {
              setBus(res.data);
              console.log(res.data);
            })
            .catch((err) => {
              alert(err.msg);
            });
        };
        getBuses();
      }, []);

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Bus No</StyledTableCell>
            <StyledTableCell align="right">Route</StyledTableCell>
            <StyledTableCell align="right">Route No</StyledTableCell>
            <StyledTableCell align="right">Owner Name</StyledTableCell>
            <StyledTableCell align="right">Driver Name</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {buses.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.busNo}
              </StyledTableCell>
              <StyledTableCell align="right">{row.route}</StyledTableCell>
              <StyledTableCell align="right">{row.routeNo}</StyledTableCell>
              <StyledTableCell align="right">{row.ownerName}</StyledTableCell>
              <StyledTableCell align="right">{row.driverName}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BusView;