import Student from './Student';

function StudentList({grades}) {
    
    console.log(grades)
    const renderedStudents = grades.map((grade) => {
        
        return <Student grade={grade}/>
    });
    
    return <div>{renderedStudents}</div>;
      
}

export default StudentList;
