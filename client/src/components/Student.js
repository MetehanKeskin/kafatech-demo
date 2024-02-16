import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import NestedModal from './Model';

function Student({grade}) {
   
    
    return (
        <div>   
            <List sx={{  bgcolor: 'background.paper',   mx: 'auto',
                width: 500,
                p: 1,
                m: 1,}}>
            {[1].map((value) => (
                <ListItem
                key={value}
                disableGutters
                secondaryAction={
                    <IconButton aria-label="comment">
                        <NestedModal grade={grade.grade} subject={grade.subject} student={grade.student} gradeId={grade.gradeId}/>
                    </IconButton>
                }
                >
                <ListItemText primary={`${grade.student.firstName} ${grade.student.lastName}`} />
                </ListItem>
            ))}
            </List>
        </div>

    );
}

export default Student;

