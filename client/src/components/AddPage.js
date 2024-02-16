import { useState } from "react";
import TextField from '@mui/material/TextField';
import { InputLabel } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/material';
import {useNavigate} from 'react-router-dom';

function AddPage({ onCreate }) {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const navigate = useNavigate();

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeGrade = (event) => {
    setGrade(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate({name, grade});
    navigate('addpage')
  };

  return (
    <div className="book-create">
    <h3>Add a Grade</h3>
    <form onSubmit={handleSubmit}>
      <InputLabel>Student Name:</InputLabel>
      <TextField id="outlined-basic" label="Full Name" variant="outlined" onChange={handleChangeName} />
      <Box sx={{ m: 2}} />
      <InputLabel>Grade:</InputLabel>
      <TextField id="outlined-basic" label="Grade" variant="outlined" onChange={handleChangeGrade} />
      <Box sx={{ m: 2}} />
      <Button className="button">Create!</Button>
    </form>
  </div>
  );
}

export default AddPage;
