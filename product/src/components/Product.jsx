import React, { useEffect , useState } from 'react'
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


  
  
  const Product= () => {
    const [rows,setRows]=useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{
            setRows(res.data)
        })
    },[])

    
    return (
      <div><TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead> 
          <TableRow sx={{ '& td, & th' : { border: 2 } }}> 
            <TableCell><b>title</b></TableCell>
            <TableCell align="right"><b>price</b></TableCell>
            <TableCell align="right"><b>category</b></TableCell>
            <TableCell align="right"><b>image</b></TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ ' & td , & th ': { border : 2} }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.image}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></div>
    )
  }

  export default Product