import './App.css';
import {Routes, Route, useNavigate, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import AddPage from './components/AddPage';


export default  function App() {

  const createGrade= async ({name, grade}) => {
    await createGrade({name, grade});
  };

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/addpage" element={<AddPage onCreate={createGrade}/>}/>
      </Routes>
  </div>
  );
}

