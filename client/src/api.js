import axios from 'axios';

export const fetchGrades = async () => {
  const response = await axios.get('http://localhost:8080/api/grades', {
    headers: {
        'Content-Type': 'application/json',
    },
    params: {
        query: "forest",
        client_id: ""
    }
});

  return response.data;
};


export const deleteGrade = async (gradeId) => {
  const response = await axios.delete('http://localhost:8080/api/grades/' + gradeId, {
    headers: {
        'Content-Type': 'application/json',
    },
    params: {
        query: "forest",
        client_id: ""
    }
})};

export const createGrade = async ({name, grade}) => {
  const response = await axios.post('http://localhost:8080/api/grades/' + {
    firstName: name,
    grade: grade
  }, {
    headers: {
        'Content-Type': 'application/json',
    },
    params: {
        query: "forest",
        client_id: ""
    }
})};
