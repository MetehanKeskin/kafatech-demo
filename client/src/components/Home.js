
import { useEffect, useState } from 'react';
import StudentList from './StudentList';
import { fetchGrades } from '../api';
import {Routes, Route, useNavigate, BrowserRouter} from 'react-router-dom';
import AddPage from './AddPage';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';

export default  function Home() {
  const [grades, setGrades] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    const result = await fetchGrades();

    setGrades(result);
  };

  return (
    <div>
        <Typography variant="h2" component="h3">
            Student and Grades
        </Typography>
      <StudentList grades={grades} />
      <Button className="button" onClick={() => navigate('addpage')}>Add Grade</Button>
  </div>
  );
}

