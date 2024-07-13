import React, { useState } from 'react'   
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'

const Add = () => {
  const [count,setCount]=useState(0);
  // let valueAdd=()=>{
  //   setCount(count+1)
  // }
  const [form,setForm]=useState(
    {
    productName:'',
    discription:'',
    price:'',
    category:''
  }
)
  function valueCap(e)
  {
    setForm({...form,[e.target.name]:e.target.value})
  }
  let valueAdd=()=>{
    console.log(form)
  }
  return (
    <div>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <div>
        <TextField
          required
          id="standard-required"
          label="ProductName"
          //defaultValue="Hello World"
          //variant="standard"
          name="fname"
          onChange={valueCap}
        />
        <TextField
           required
           id="standard-required"
           label="Description"
           //defaultValue="Hello World"
           //variant="standard"
           name="description"
           onChange={valueCap}
        />
        <TextField
           required
           id="standard-required"
           label="Price"
           //defaultValue="Hello World"
           //variant="standard"
           name="price"
           onChange={valueCap}
        />
         <TextField
          required
          id="standard-required"
          label="Category"
          //defaultValue="Hello World"
          //variant="standard"
          name="category"
          onChange={valueCap}
        />
        <Button variant="contained" color="success" onClick={valueAdd}>submit</Button>
        <br/>
        {/* <small>Count is {count}</small> */}
        <br/>
      </div>
    </Box>
    </div>
  )
}
export default Add